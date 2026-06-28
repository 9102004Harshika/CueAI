import mongoose from 'mongoose';

const SubscriptionSchema = new mongoose.Schema({
    subscriberId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true, index: true },
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'CreatorProfile', required: true, index: true },
    tier: { type: String, enum: ['Free', 'Premium'], default: 'Free' },
    status: { type: String, enum: ['Active', 'Cancelled', 'Expired'], default: 'Active' },
    startDate: { type: Date, default: Date.now },
    expiryDate: { type: Date, default: null }, // Null for free tier
    history: [{
        action: String,
        date: Date
    }]
}, { timestamps: true });

SubscriptionSchema.index({ subscriberId: 1, creatorId: 1 }, { unique: true });

export const SubscriptionModel = mongoose.model('Subscription', SubscriptionSchema);
