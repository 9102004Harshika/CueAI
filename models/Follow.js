import mongoose from 'mongoose';

const FollowSchema = new mongoose.Schema({
    followerId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true, index: true },
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'CreatorProfile', required: true, index: true }
}, { timestamps: true });

// Prevent duplicate follows
FollowSchema.index({ followerId: 1, creatorId: 1 }, { unique: true });

export const FollowModel = mongoose.model('Follow', FollowSchema);
