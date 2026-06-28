import mongoose from 'mongoose';

const SessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    refreshTokenHash: { type: String, required: true },
    deviceInfo: { type: String, default: 'Unknown Device' },
    ipAddress: { type: String, default: 'Unknown IP' },
    expiresAt: { type: Date, required: true },
    isRevoked: { type: Boolean, default: false }
}, { timestamps: true });

// Automatically expire sessions using a TTL index
SessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const SessionModel = mongoose.model('Session', SessionSchema);
