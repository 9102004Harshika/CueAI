import mongoose from 'mongoose';

const PostCommentSchema = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'FeedPost', required: true, index: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    parentCommentId: { type: mongoose.Schema.Types.ObjectId, ref: 'PostComment', default: null }, // Support for nested replies (Step 8)
    
    text: { type: String, required: true },
    likesCount: { type: Number, default: 0 },
    isPinned: { type: Boolean, default: false },
    isEdited: { type: Boolean, default: false }
}, { timestamps: true });

// Optimize querying a post's top-level comments
PostCommentSchema.index({ postId: 1, parentCommentId: 1, createdAt: -1 });

export const PostCommentModel = mongoose.model('PostComment', PostCommentSchema);
