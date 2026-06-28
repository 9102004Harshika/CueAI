import mongoose from 'mongoose';

const FeedPostSchema = new mongoose.Schema({
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'CreatorProfile', required: true, index: true },
    linkedPrompt: { type: mongoose.Schema.Types.ObjectId, ref: 'Prompt', default: null, index: true }, // CTA Target
    
    // Content
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    caption: { type: String, default: '' },
    tags: [{ type: String }],
    
    // Media (Step 2)
    media: [{ type: String }], // Cloudinary URLs
    mediaType: { type: String, enum: ['Image', 'Video', 'GIF', 'Carousel', 'None'], default: 'None' },
    
    // Status & Permissions
    visibility: { type: String, enum: ['Public', 'FollowersOnly', 'Private'], default: 'Public' },
    status: { type: String, enum: ['DRAFT', 'PUBLISHED', 'ARCHIVED', 'REMOVED'], default: 'DRAFT' },
    allowComments: { type: Boolean, default: true },
    allowSharing: { type: Boolean, default: true },
    allowDownloads: { type: Boolean, default: false },
    isFeatured: { type: Boolean, default: false },
    
    // Caching/Analytics Counters (Steps 14)
    likesCount: { type: Number, default: 0 },
    commentsCount: { type: Number, default: 0 },
    bookmarksCount: { type: Number, default: 0 },
    sharesCount: { type: Number, default: 0 },
    viewsCount: { type: Number, default: 0 },
    promptClicksCount: { type: Number, default: 0 },
    promptRunsCount: { type: Number, default: 0 },
    purchasesGenerated: { type: Number, default: 0 }, // If this post led to a prompt sale
    
    // Discovery Algorithm Score (Step 5 & 12)
    trendingScore: { type: Number, default: 0, index: true },
    
    // Timestamps
    publishedAt: { type: Date, default: null, index: -1 },
    deletedAt: { type: Date, default: null }
}, { timestamps: true });

// Optimize feed queries (Step 20)
FeedPostSchema.index({ status: 1, visibility: 1, publishedAt: -1 });
FeedPostSchema.index({ trendingScore: -1 });

export const FeedPostModel = mongoose.model('FeedPost', FeedPostSchema);
