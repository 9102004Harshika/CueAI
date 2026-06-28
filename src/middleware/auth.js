import jwt from 'jsonwebtoken';
import config from '../config/index.js';
import { sendError } from '../utils/responseHandler.js';
import { HTTP_STATUS } from '../constants/messages.js';
import { SignupModel as User } from '../../models/Signup.js'; // Future rename to User

export const requireAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return sendError(res, 'Authentication token missing or invalid.', HTTP_STATUS.UNAUTHORIZED);
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, config.security.jwtSecret);
        
        // Fetch fresh user from DB to check status
        const user = await User.findById(decoded.id);
        
        if (!user) {
            return sendError(res, 'User no longer exists.', HTTP_STATUS.UNAUTHORIZED);
        }

        if (user.accountStatus === 'SUSPENDED' || user.accountStatus === 'BANNED' || user.accountStatus === 'DELETED') {
            return sendError(res, `Account is ${user.accountStatus.toLowerCase()}.`, HTTP_STATUS.UNAUTHORIZED);
        }

        req.user = user; // Attach full user object to request
        next();
    } catch (err) {
        return sendError(res, 'Token expired or invalid.', HTTP_STATUS.UNAUTHORIZED);
    }
};

/**
 * Role Based Access Control (RBAC)
 * Example usage: requireRole(['ADMIN', 'SUPER_ADMIN'])
 */
export const requireRole = (roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return sendError(res, 'Unauthorized.', HTTP_STATUS.UNAUTHORIZED);
        }
        
        // Backwards compatibility with 'accountType' until migration is complete
        const userRole = req.user.role || (req.user.accountType === 'admin' ? 'ADMIN' : 'USER');
        
        if (!roles.includes(userRole)) {
            return sendError(res, `Access denied. Requires one of the following roles: ${roles.join(', ')}`, HTTP_STATUS.UNAUTHORIZED);
        }
        
        next();
    };
};

// Legacy support (maps to new RBAC system)
export const requireAdmin = requireRole(['ADMIN', 'SUPER_ADMIN']);
