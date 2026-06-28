import mongoose from 'mongoose';

const AuditLogSchema = new mongoose.Schema({
    adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true, index: true },
    action: { 
        type: String, 
        required: true,
        enum: [
            'USER_BANNED', 'USER_RESTORED', 'PROMPT_DELETED', 'PROMPT_RESTORED',
            'CREATOR_VERIFIED', 'CREATOR_REJECTED', 'SETTINGS_CHANGED', 'ROLE_CHANGED'
        ],
        index: true
    },
    targetId: { type: mongoose.Schema.Types.ObjectId, required: true }, // ID of the User/Prompt affected
    targetType: { type: String, enum: ['User', 'Prompt', 'CreatorProfile', 'Settings'], required: true },
    
    // Security Context
    ipAddress: { type: String, default: null },
    metadata: { type: mongoose.Schema.Types.Mixed, default: {} }, // E.g., Previous state vs New state
    
    createdAt: { type: Date, default: Date.now, immutable: true, index: -1 } // Audit logs can NEVER be updated
});

export const AuditLogModel = mongoose.model('AuditLog', AuditLogSchema);
