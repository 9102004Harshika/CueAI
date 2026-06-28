import mongoose from "mongoose";

const PromptSchema = new mongoose.Schema({
  // Basic Info
  title: { type: String, required: true },
  slug: { type: String, unique: true, index: true },
  description: { type: String, required: true },
  shortDescription: { type: String, default: '' },
  
  // Categorization
  type: { type: String, default: 'text' }, // Legacy mapping
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null }, // Replaces string category
  subcategory: { type: String, default: '' },
  tags: [{ type: String }],
  
  // Media & Content
  promptContent: { type: String, default: '' },
  coverImage: { type: String, default: '' },
  galleryImages: [{ type: String }],
  
  // Pricing & Licensing
  price: { type: Number, default: 0 },
  currency: { type: String, default: 'USD' },
  license: { type: String, enum: ['Personal', 'Commercial', 'Extended', 'Enterprise'], default: 'Personal' },
  
  // Analytics & Engagement
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
  estimatedTokens: { type: Number, default: 0 },
  language: { type: String, default: 'English' },
  
  averageRating: { type: Number, default: 0 },
  totalRatings: { type: Number, default: 0 },
  totalSales: { type: Number, default: 0 },
  totalViews: { type: Number, default: 0 },
  totalExecutions: { type: Number, default: 0 },
  totalBookmarks: { type: Number, default: 0 },
  
  // Status & Visibility
  visibility: { type: String, enum: ['Public', 'Private', 'Unlisted'], default: 'Public' },
  status: { type: String, enum: ['DRAFT', 'PUBLISHED', 'ARCHIVED', 'REJECTED'], default: 'DRAFT' },
  isFeatured: { type: Boolean, default: false },
  isVerified: { type: Boolean, default: false },
  deleted: { type: Boolean, default: false }, // Soft delete
  
  version: { type: Number, default: 1 },

  // Relations
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  
  // Legacy fields preserved for backward compatibility
  prompt: {
    data: { type: Buffer }, 
    contentType: String, 
  },
  username: { type: String },
  legacyCategory: { type: String }, // Mapped from old category field
  exampleInput: { type: String },
  exampleOutput: { type: String },
  model: { type: String },

}, { timestamps: true });

// Indexes for scalable queries
PromptSchema.index({ title: 'text', description: 'text', tags: 'text' });
PromptSchema.index({ userId: 1 });
PromptSchema.index({ category: 1 });
PromptSchema.index({ price: 1 });
PromptSchema.index({ averageRating: -1 });
PromptSchema.index({ totalSales: -1 });
PromptSchema.index({ status: 1, deleted: 1 });

// Auto-generate slug before saving if not present
PromptSchema.pre('save', function(next) {
    if (this.isModified('title') && !this.slug) {
        this.slug = this.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') + '-' + Math.random().toString(36).substring(2, 8);
    }
    
    // Map legacy category if provided as string
    if (this.isModified('category') && typeof this.category === 'string') {
        this.legacyCategory = this.category;
        this.category = null; // Wait for Category document migration
    }
    
    next();
});

export const PromptModel = mongoose.model('Prompt', PromptSchema);
