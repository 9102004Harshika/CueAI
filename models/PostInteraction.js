import mongoose from 'mongoose';

const PostInteractionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true, index: true },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'FeedPost', required: true, index: true },
    interactionType: { type: String, enum: ['LIKE', 'BOOKMARK', 'SHARE'], required: true }
}, { timestamps: true });

// Prevent duplicate likes/bookmarks per user per post
PostInteractionSchema.index({ userId: 1, postId: 1, interactionType: 1 }, { unique: true });

export const PostInteractionModel = mongoose.model('PostInteraction', PostInteractionSchema);
