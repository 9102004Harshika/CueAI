import { NotificationModel as Notification } from '../../models/Notification.js';
import EventBus from './EventBus.js';
import logger from '../utils/logger.js';

class NotificationService {
    constructor() {
        this._setupEventListeners();
    }

    /**
     * Step 24: Listen to the domain events emitted by Business Controllers
     */
    _setupEventListeners() {
        EventBus.on('PROMPT_PURCHASED', this.handlePromptPurchase.bind(this));
        EventBus.on('CREATOR_FOLLOWED', this.handleCreatorFollow.bind(this));
    }

    // Step 10: Centralized Template Resolution
    _resolveTemplate(templateStr, vars) {
        let result = templateStr;
        for (const [key, value] of Object.entries(vars)) {
            result = result.replace(new RegExp(`{{${key}}}`, 'g'), value);
        }
        return result;
    }

    async handlePromptPurchase({ buyerId, creatorId, promptId, promptTitle, amount }) {
        try {
            const message = this._resolveTemplate('Your prompt "{{prompt}}" was just purchased for ${{amount}}!', {
                prompt: promptTitle,
                amount: amount
            });

            const notification = await Notification.create({
                recipient: creatorId,
                sender: buyerId,
                type: 'PROMPT_PURCHASE',
                title: 'New Sale! 🎉',
                message,
                referenceId: promptId,
                referenceType: 'Prompt',
                priority: 'HIGH'
            });

            // Step 1: Tell Socket Service to push to UI
            EventBus.emit('NOTIFICATION_CREATED', notification);

            // Step 7: Push to Email abstraction (Stubbed)
            // EmailProviderFactory.send(creatorEmail, templateId, vars);

        } catch (err) {
            logger.error(`Failed to handle prompt purchase event: ${err.message}`);
        }
    }

    async handleCreatorFollow({ followerId, followerName, creatorId }) {
        try {
            const notification = await Notification.create({
                recipient: creatorId,
                sender: followerId,
                type: 'NEW_FOLLOWER',
                title: 'New Follower',
                message: `${followerName} started following you!`,
                referenceId: followerId,
                referenceType: 'CreatorProfile'
            });

            EventBus.emit('NOTIFICATION_CREATED', notification);
        } catch (err) {
            logger.error(`Failed to handle creator follow event: ${err.message}`);
        }
    }

    /**
     * Step 4: Notification Center API queries (with Step 19 cursor performance)
     */
    async getUserNotifications(userId, limit = 20) {
        return await Notification.find({ recipient: userId })
            .sort({ createdAt: -1 })
            .limit(limit)
            .lean();
    }

    async markAsRead(notificationId, userId) {
        return await Notification.findOneAndUpdate(
            { _id: notificationId, recipient: userId },
            { isRead: true, readAt: new Date() },
            { new: true }
        );
    }
    
    async getUnreadCount(userId) {
        return await Notification.countDocuments({ recipient: userId, isRead: false });
    }
}

export default new NotificationService();
