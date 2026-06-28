import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../api/axios';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                // Try to fetch profile to see if we have a valid session
                const response = await api.get('/users/me');
                setUser(response.data.data);
            } catch (err) {
                // If 401, the interceptor will try to refresh. If that fails, user remains null.
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        initializeAuth();
    }, []);

    const login = async (identifier, password) => {
        const response = await api.post('/auth/login', { identifier, password });
        setUser(response.data.data.user);
        // The interceptor will handle the accessToken from response if configured
        localStorage.setItem('accessToken', response.data.data.accessToken);
    };

    const logout = async () => {
        try {
            await api.post('/auth/logout');
        } finally {
            setUser(null);
            localStorage.removeItem('accessToken');
        }
    };

    if (loading) {
        return <div className="flex h-screen w-screen items-center justify-center bg-gray-900 text-white">Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
