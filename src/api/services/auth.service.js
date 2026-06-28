import api from '../axios.js';

export const authService = {
    login: async (email) => {
        return api.post('/send-otp-for-login', { email });
    },
    verifyOtp: async (email, otp) => {
        return api.post('/verify-otp-and-login', { email, otp });
    },
    signup: async (userData) => {
        return api.post('/signup', userData);
    }
};
