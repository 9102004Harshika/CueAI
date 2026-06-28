import api from '../axios';

export const marketplaceService = {
    search: async (params) => {
        return api.get('/marketplace/search', { params });
    },
    getTrending: async () => {
        return api.get('/marketplace/trending');
    },
    getAnalytics: async () => {
        return api.get('/marketplace/analytics');
    }
};

export const promptDomainService = {
    createDraft: async (data) => {
        return api.post('/prompts', data);
    },
    updatePrompt: async (id, data) => {
        return api.patch(`/prompts/${id}`, data);
    },
    publishPrompt: async (id) => {
        return api.post(`/prompts/${id}/publish`);
    },
    archivePrompt: async (id) => {
        return api.post(`/prompts/${id}/archive`);
    },
    deletePrompt: async (id) => {
        return api.delete(`/prompts/${id}`);
    }
};
