import mongoose from 'mongoose';

const PlatformEventSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', default: null, index: true },
    eventType: { 
        type: String, 
        required: true,
        enum: [
            'USER_REGISTERED', 'PROMPT_VIEWED', 'PROMPT_EXECUTED', 'PROMPT_PURCHASED',
            'CREATOR_FOLLOWED', 'SEARCH_QUERY'
        ],
        index: true
    },
    
    // Associated Entities (Sparse Indexes)
    promptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prompt', default: null, index: true },
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'CreatorProfile', default: null, index: true },
    
    // Optional Metadata
    metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
    
    // Denormalized metrics for quick aggregation (Step 22)
    revenueGenerated: { type: Number, default: 0 },
    executionTimeMs: { type: Number, default: 0 },
    
    createdAt: { type: Date, default: Date.now, index: -1 } // Timeseries friendly
}, { 
    timeseries: {
        timeField: 'createdAt',
        metaField: 'eventType',
        granularity: 'hours'
    }
});

export const PlatformEventModel = mongoose.model('PlatformEvent', PlatformEventSchema);
