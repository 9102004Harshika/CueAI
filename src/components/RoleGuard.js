import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const RoleGuard = ({ children, allowedRoles }) => {
    const { user } = useAuth();

    if (!user || !allowedRoles.includes(user.role)) {
        return (
            <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-900 text-white">
                <h1 className="text-4xl font-bold text-red-500 mb-4">403 - Unauthorized</h1>
                <p>You do not have permission to view this page.</p>
            </div>
        );
    }

    return children;
};
