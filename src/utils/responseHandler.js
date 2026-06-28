import { HTTP_STATUS } from '../constants/messages.js';

export const sendSuccess = (res, data, message = 'Success', statusCode = HTTP_STATUS.OK) => {
    return res.status(statusCode).json({
        status: 'success',
        message,
        data
    });
};

export const sendError = (res, message = 'Error', statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR, errors = null) => {
    const response = {
        status: 'error',
        message
    };
    if (errors) {
        response.errors = errors;
    }
    return res.status(statusCode).json(response);
};
