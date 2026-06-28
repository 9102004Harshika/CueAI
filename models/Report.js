import mongoose from 'mongoose';

const ReportSchema = new mongoose.Schema({
    reporterId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true, index: true },
    
    // Step 7: Report System
    reason: { 
        type: String, 
        enum: ['SPAM', 'INAPPROPRIATE', 'COPYRIGHT', 'FRAUD', 'OTHER'], 
        required: true 
    },
    evidenceText: { type: String, default: '' },
    
    // Polymorphic Target
    targetId: { type: mongoose.Schema.Types.ObjectId, required: true },
    targetType: { type: String, enum: ['Prompt', 'FeedPost', 'CreatorProfile', 'Comment'], required: true },
    
    // Step 8: Moderation Workflow Queue
    status: { 
        type: String, 
        enum: ['PENDING', 'INVESTIGATING', 'RESOLVED', 'DISMISSED'], 
        default: 'PENDING',
        index: true
    },
    assignedModerator: { type: mongoose.Schema.Types.ObjectId, ref: 'users', default: null },
    resolutionNotes: { type: String, default: '' }
}, { timestamps: true });

export const ReportModel = mongoose.model('Report', ReportSchema);
