import api from '../axios.js';

export const promptService = {
    getPrompts: async () => {
        return api.get('/prompts');
    },
    getPromptById: async (id) => {
        return api.get(`/prompt/${id}`);
    },
    createPrompt: async (formData) => {
        return api.post('/createPrompt', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    }
};
