import adminService from '../src/services/AdminService.js';
import { sendSuccess, sendError } from '../src/utils/responseHandler.js';
import { HTTP_STATUS } from '../src/constants/messages.js';
import logger from '../src/utils/logger.js';

export const BanUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { reason } = req.body;
        const adminId = req.user._id;

        const user = await adminService.banUser(adminId, id, reason);
        return sendSuccess(res, user, 'User has been banned.');
    } catch (err) {
        logger.error(`BanUser Error: ${err.message}`);
        return sendError(res, 'Failed to ban user.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const VerifyCreator = async (req, res) => {
    try {
        const { id } = req.params;
        const adminId = req.user._id;

        const creator = await adminService.verifyCreator(adminId, id);
        return sendSuccess(res, creator, 'Creator has been verified.');
    } catch (err) {
        logger.error(`VerifyCreator Error: ${err.message}`);
        return sendError(res, 'Failed to verify creator.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const ResolveReport = async (req, res) => {
    try {
        const { id } = req.params;
        const { action, notes } = req.body; // action: 'DELETE_CONTENT', 'DISMISS'
        const adminId = req.user._id;

        const report = await adminService.resolveReport(adminId, id, action, notes);
        return sendSuccess(res, report, 'Report resolved successfully.');
    } catch (err) {
        logger.error(`ResolveReport Error: ${err.message}`);
        return sendError(res, 'Failed to resolve report.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const UpdatePlatformSettings = async (req, res) => {
    try {
        const adminId = req.user._id;
        const settings = await adminService.updateSettings(adminId, req.body);
        return sendSuccess(res, settings, 'Platform settings updated.');
    } catch (err) {
        logger.error(`UpdateSettings Error: ${err.message}`);
        return sendError(res, 'Failed to update settings.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};
