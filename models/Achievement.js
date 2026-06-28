import mongoose from 'mongoose';

const AchievementSchema = new mongoose.Schema({
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'CreatorProfile', required: true, index: true },
    achievementId: { type: String, required: true }, // e.g. 'FIRST_PROMPT', '100_SALES'
    name: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, default: '' },
    unlockedAt: { type: Date, default: Date.now }
});

// A creator can only unlock a specific achievement once
AchievementSchema.index({ creatorId: 1, achievementId: 1 }, { unique: true });

export const AchievementModel = mongoose.model('Achievement', AchievementSchema);
