import logger from '../utils/logger.js';
import { HTTP_STATUS } from '../constants/messages.js';

export const errorHandler = (err, req, res, next) => {
    logger.error(`[Unhandled Error] ${err.message}`, { stack: err.stack });

    // Ensure we don't leak stack traces in production
    const isProduction = process.env.NODE_ENV === 'production';
    
    const statusCode = err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR;
    const response = {
        success: false,
        message: err.message || 'An unexpected error occurred.',
    };

    if (!isProduction) {
        response.stack = err.stack;
    }

    res.status(statusCode).json(response);
};
