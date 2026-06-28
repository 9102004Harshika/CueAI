import api from '../axios';

export const adminService = {
    banUser: async (userId, reason) => {
        return api.patch(`/admin/users/${userId}/ban`, { reason });
    },
    
    verifyCreator: async (creatorId) => {
        return api.patch(`/admin/creators/${creatorId}/verify`);
    },

    resolveReport: async (reportId, action, notes) => {
        return api.patch(`/admin/reports/${reportId}/resolve`, { action, notes });
    },

    updatePlatformSettings: async (settings) => {
        return api.patch('/admin/settings', settings);
    }
};
