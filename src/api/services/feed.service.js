import api from '../axios';

export const feedService = {
    getFeed: async (params) => {
        // params can include cursor, type, category, etc.
        return api.get('/feed', { params });
    },
    createPost: async (data) => {
        return api.post('/feed', data);
    },
    toggleLike: async (postId) => {
        return api.post(`/feed/${postId}/like`);
    },
    toggleBookmark: async (postId) => {
        return api.post(`/feed/${postId}/bookmark`);
    }
};
