import api from '../axios';

export const notificationService = {
    getNotifications: async (limit = 20) => {
        return api.get('/notifications', { params: { limit } });
    },
    
    markAsRead: async (notificationId) => {
        return api.patch(`/notifications/${notificationId}/read`);
    }
};
