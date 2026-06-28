import mongoose from 'mongoose';

const CreatorProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true, unique: true, index: true },
    displayName: { type: String, required: true },
    username: { type: String, required: true, unique: true, index: true },
    headline: { type: String, default: '' },
    bio: { type: String, default: '' },
    avatar: { type: String, default: '' },
    coverImage: { type: String, default: '' },
    location: { type: String, default: '' },
    country: { type: String, default: '' },
    website: { type: String, default: '' },
    
    // Links
    socialLinks: {
        twitter: { type: String, default: '' },
        linkedin: { type: String, default: '' },
        github: { type: String, default: '' }
    },
    portfolioLinks: [{ type: String }],
    
    // Status & Verification (Step 6)
    joinedDate: { type: Date, default: Date.now },
    verifiedStatus: { type: String, enum: ['Pending', 'Verified', 'Rejected', 'None'], default: 'None' },
    status: { type: String, enum: ['Active', 'Suspended'], default: 'Active' },
    visibility: { type: String, enum: ['Public', 'Private'], default: 'Public' },
    
    // Reputation & Level (Step 8 & 9)
    creatorLevel: { type: String, enum: ['Beginner', 'Intermediate', 'Professional', 'Expert', 'Elite', 'Legend'], default: 'Beginner' },
    creatorScore: { type: Number, default: 0 },
    badges: [{ type: String }], // Step 7
    
    // Stats (Aggregated from other collections)
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 },
    subscribers: { type: Number, default: 0 },
    promptCount: { type: Number, default: 0 },
    collectionCount: { type: Number, default: 0 },
    totalViews: { type: Number, default: 0 },
    totalLikes: { type: Number, default: 0 },
    totalBookmarks: { type: Number, default: 0 },
    totalSales: { type: Number, default: 0 },
    totalRevenue: { type: Number, default: 0 },
    totalExecutions: { type: Number, default: 0 },
    averageRating: { type: Number, default: 0 },
    
    // Professional Meta
    skills: [{ type: String }],
    specializations: [{ type: String }],
    languages: [{ type: String }],
    experienceLevel: { type: String, default: '' },
    availability: { type: String, enum: ['Available', 'Busy', 'Not Available'], default: 'Available' }

}, { timestamps: true });

// Optimize text search for Step 16
CreatorProfileSchema.index({ displayName: 'text', username: 'text', skills: 'text', specializations: 'text' });
CreatorProfileSchema.index({ creatorScore: -1 }); // For Leaderboards

export const CreatorProfileModel = mongoose.model('CreatorProfile', CreatorProfileSchema);
