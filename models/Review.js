import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    promptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prompt', required: true, index: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    purchaseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Purchase', required: true, unique: true }, // One review per purchase
    stars: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, default: '' },
    helpfulCount: { type: Number, default: 0 }
}, { timestamps: true });

export const ReviewModel = mongoose.model('Review', ReviewSchema);
