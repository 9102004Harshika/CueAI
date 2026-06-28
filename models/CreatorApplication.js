import mongoose from 'mongoose';

const CreatorApplicationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    status: { type: String, enum: ['PENDING', 'APPROVED', 'REJECTED'], default: 'PENDING' },
    reason: { type: String, default: '' },
    portfolioUrl: { type: String, default: '' },
    bio: { type: String, default: '' },
    reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', default: null },
    reviewDate: { type: Date, default: null }
}, { timestamps: true });

export const CreatorApplicationModel = mongoose.model('CreatorApplication', CreatorApplicationSchema);
