import api from '../axios';

export const analyticsService = {
    getAdminDashboard: async () => {
        return api.get('/analytics/admin/dashboard');
    },
    
    getCreatorAnalytics: async (creatorId) => {
        return api.get(`/analytics/creator/${creatorId}`);
    },

    exportAnalytics: (creatorId) => {
        // We use window.open for file downloads rather than axios
        const downloadUrl = `${process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1'}/analytics/creator/${creatorId}/export`;
        window.open(downloadUrl, '_blank');
    },

    getRecommendations: async (limit = 10) => {
        return api.get('/analytics/recommendations', { params: { limit } });
    }
};
