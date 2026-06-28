import mongoose from 'mongoose';

const PromptCollectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String, default: '' },
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    prompts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Prompt' }],
    coverImage: { type: String, default: '' },
    isPublic: { type: Boolean, default: true },
    followersCount: { type: Number, default: 0 }
}, { timestamps: true });

// Auto-generate slug
PromptCollectionSchema.pre('validate', function(next) {
    if (this.isModified('name') && !this.slug) {
        this.slug = this.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') + '-' + Math.random().toString(36).substring(2, 6);
    }
    next();
});

export const PromptCollectionModel = mongoose.model('PromptCollection', PromptCollectionSchema);
