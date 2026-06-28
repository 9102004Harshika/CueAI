import notificationService from '../src/services/NotificationService.js';
import { sendSuccess, sendError } from '../src/utils/responseHandler.js';
import { HTTP_STATUS } from '../src/constants/messages.js';
import logger from '../src/utils/logger.js';

export const GetUserNotifications = async (req, res) => {
    try {
        const userId = req.user._id;
        const limit = parseInt(req.query.limit) || 20;
        
        const notifications = await notificationService.getUserNotifications(userId, limit);
        const unreadCount = await notificationService.getUnreadCount(userId);
        
        return sendSuccess(res, { notifications, unreadCount }, 'Notifications retrieved.');
    } catch (err) {
        logger.error(`GetUserNotifications Error: ${err.message}`);
        return sendError(res, 'Failed to fetch notifications.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const MarkAsRead = async (req, res) => {
    try {
        const { notificationId } = req.params;
        const userId = req.user._id;
        
        await notificationService.markAsRead(notificationId, userId);
        return sendSuccess(res, null, 'Notification marked as read.');
    } catch (err) {
        logger.error(`MarkAsRead Error: ${err.message}`);
        return sendError(res, 'Failed to mark notification.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};
