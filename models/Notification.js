import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema({
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true, index: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'users', default: null }, // Null for system events
    
    // Step 3: Notification Types
    type: { 
        type: String, 
        required: true,
        enum: [
            'NEW_FOLLOWER', 'NEW_SUBSCRIBER', 'PROMPT_PURCHASE', 'PROMPT_LIKE', 
            'FEED_LIKE', 'COMMENT_ADDED', 'ACHIEVEMENT_UNLOCKED', 'SYSTEM_ALERT'
        ],
        index: true
    },
    
    title: { type: String, required: true },
    message: { type: String, required: true },
    
    // Polymorphic Relations
    referenceId: { type: mongoose.Schema.Types.ObjectId, default: null }, // e.g. PromptId or PostId
    referenceType: { type: String, enum: ['Prompt', 'FeedPost', 'CreatorProfile', 'Comment', 'System'], default: 'System' },
    
    // State Tracking
    isRead: { type: Boolean, default: false, index: true },
    priority: { type: String, enum: ['LOW', 'NORMAL', 'HIGH', 'URGENT'], default: 'NORMAL' },
    
    readAt: { type: Date, default: null },
    expiresAt: { type: Date, default: null }
}, { timestamps: true });

// Step 19: Performance (Indexes for unread queries)
NotificationSchema.index({ recipient: 1, isRead: 1, createdAt: -1 });

export const NotificationModel = mongoose.model('Notification', NotificationSchema);
