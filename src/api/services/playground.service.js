import api from '../axios';

export const playgroundService = {
    createSession: async (data) => {
        return api.post('/playground/session', data);
    },
    
    // Note: Since this is an EventSource (SSE) stream, we don't use standard Axios.
    // Instead we return the URL so the UI component can instantiate EventSource natively.
    getExecutionStreamUrl: (sessionId) => {
        return `${process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1'}/playground/session/${sessionId}/stream`;
    },

    getHistory: async () => {
        return api.get('/playground/history');
    },

    saveOutput: async (sessionId, data) => {
        return api.post(`/playground/session/${sessionId}/save`, data);
    }
};
