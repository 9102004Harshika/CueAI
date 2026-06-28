import mongoose from 'mongoose';

const CreatorActivitySchema = new mongoose.Schema({
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'CreatorProfile', required: true, index: true },
    type: { 
        type: String, 
        enum: [
            'PROMPT_PUBLISHED', 'MILESTONE_REACHED', 'BADGE_EARNED', 
            'COLLECTION_CREATED', 'VERIFIED'
        ], 
        required: true 
    },
    message: { type: String, required: true },
    metadata: { type: mongoose.Schema.Types.Mixed }, // Stores related promptId, badgeName, etc.
    visibility: { type: String, enum: ['Public', 'Private'], default: 'Public' },
    createdAt: { type: Date, default: Date.now }
});

export const CreatorActivityModel = mongoose.model('CreatorActivity', CreatorActivitySchema);
