import mongoose from 'mongoose';

const FavoriteSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true, index: true },
    promptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prompt', required: true, index: true }
}, { timestamps: true });

// Ensure a user can only favorite a prompt once
FavoriteSchema.index({ userId: 1, promptId: 1 }, { unique: true });

export const FavoriteModel = mongoose.model('Favorite', FavoriteSchema);
