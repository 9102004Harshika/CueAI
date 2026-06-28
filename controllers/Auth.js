import authService from '../src/services/AuthService.js';
import { sendSuccess, sendError } from '../src/utils/responseHandler.js';
import { HTTP_STATUS } from '../src/constants/messages.js';
import logger from '../src/utils/logger.js';

/**
 * Clean REST API for IAM Authentication (Phase 2)
 */

export const Register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        return sendSuccess(res, user, 'User registered successfully.', HTTP_STATUS.CREATED);
    } catch (err) {
        logger.error(`Registration Error: ${err.message}`);
        const status = err.message.includes('exists') ? HTTP_STATUS.BAD_REQUEST : HTTP_STATUS.BAD_REQUEST;
        return sendError(res, err.message, status);
    }
};

export const Login = async (req, res) => {
    try {
        const { identifier, password } = req.body;
        const result = await authService.login(identifier, password);

        // Send refresh token as an HTTP-Only secure cookie
        res.cookie('refreshToken', result.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        // Exclude refresh token from JSON payload for security
        return sendSuccess(res, {
            user: result.user,
            accessToken: result.accessToken
        }, 'Login successful.');

    } catch (err) {
        logger.error(`Login Error: ${err.message}`);
        return sendError(res, err.message, HTTP_STATUS.UNAUTHORIZED);
    }
};

export const Logout = async (req, res) => {
    try {
        const refreshToken = req.cookies?.refreshToken;
        await authService.logoutSession(refreshToken);
        
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
        return sendSuccess(res, null, 'Logged out successfully.');
    } catch (err) {
        logger.error(`Logout Error: ${err.message}`);
        return sendError(res, 'An error occurred during logout.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const RefreshToken = async (req, res) => {
    try {
        const currentRefreshToken = req.cookies?.refreshToken;
        if (!currentRefreshToken) {
            return sendError(res, 'Refresh token missing.', HTTP_STATUS.UNAUTHORIZED);
        }

        const result = await authService.refreshTokens(currentRefreshToken);

        res.cookie('refreshToken', result.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        return sendSuccess(res, { accessToken: result.accessToken }, 'Token refreshed successfully.');
    } catch (err) {
        logger.error(`RefreshToken Error: ${err.message}`);
        return sendError(res, 'Invalid or expired refresh token.', HTTP_STATUS.UNAUTHORIZED);
    }
};

export const LogoutAll = async (req, res) => {
    try {
        // Requires authentication middleware to attach req.user
        await authService.logoutAllSessions(req.user._id);
        
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
        
        return sendSuccess(res, null, 'Logged out of all sessions.');
    } catch (err) {
        logger.error(`LogoutAll Error: ${err.message}`);
        return sendError(res, 'Failed to logout of all sessions.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const ForgotPassword = async (req, res) => {
    try {
        await authService.forgotPassword(req.body.email);
        return sendSuccess(res, null, 'Password reset email sent.');
    } catch (err) {
        logger.error(`ForgotPassword Error: ${err.message}`);
        return sendError(res, err.message, HTTP_STATUS.BAD_REQUEST);
    }
};

export const ResetPassword = async (req, res) => {
    try {
        await authService.resetPassword(req.body.email, req.body.token, req.body.newPassword);
        return sendSuccess(res, null, 'Password reset successfully.');
    } catch (err) {
        logger.error(`ResetPassword Error: ${err.message}`);
        return sendError(res, err.message, HTTP_STATUS.BAD_REQUEST);
    }
};

export const InitiateEmailVerification = async (req, res) => {
    try {
        await authService.initiateEmailVerification(req.body.email);
        return sendSuccess(res, null, 'Verification email sent.');
    } catch (err) {
        logger.error(`InitiateEmailVerification Error: ${err.message}`);
        return sendError(res, err.message, HTTP_STATUS.BAD_REQUEST);
    }
};

export const VerifyEmail = async (req, res) => {
    try {
        await authService.verifyEmail(req.body.email, req.body.token);
        return sendSuccess(res, null, 'Email verified successfully.');
    } catch (err) {
        logger.error(`VerifyEmail Error: ${err.message}`);
        return sendError(res, err.message, HTTP_STATUS.BAD_REQUEST);
    }
};
