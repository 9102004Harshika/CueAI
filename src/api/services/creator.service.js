import api from '../axios';

export const creatorService = {
    search: async (params) => {
        return api.get('/creators/search', { params });
    },
    getDashboard: async (username) => {
        return api.get(`/creators/${username}/dashboard`);
    },
    follow: async (username) => {
        return api.post(`/creators/${username}/follow`);
    },
    unfollow: async (username) => {
        return api.delete(`/creators/${username}/follow`);
    }
};

export const creatorAdminService = {
    verifyCreator: async (creatorId) => {
        return api.post(`/admin/creators/${creatorId}/verify`);
    }
};
