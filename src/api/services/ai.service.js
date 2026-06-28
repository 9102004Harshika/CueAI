import api from '../axios';

export const aiLayerService = {
    optimizePrompt: async (promptText) => {
        return api.post('/ai/optimize', { promptText });
    },
    
    generateMetadata: async (promptText) => {
        return api.post('/ai/metadata', { promptText });
    },

    analyzeQuality: async (promptText) => {
        return api.post('/ai/analyze', { promptText });
    }
};
