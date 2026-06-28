import { SignupModel as User } from '../models/Signup.js';
import { CreatorApplicationModel as CreatorApplication } from '../models/CreatorApplication.js';
import { AuditLogModel as AuditLog } from '../models/AuditLog.js';
import { sendSuccess, sendError } from '../src/utils/responseHandler.js';
import { HTTP_STATUS } from '../src/constants/messages.js';
import logger from '../src/utils/logger.js';

/**
 * Step 11 & 15: Profile Management & User Preferences
 */
export const GetMyProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        if (!user) return sendError(res, 'User not found.', HTTP_STATUS.NOT_FOUND);
        
        return sendSuccess(res, user, 'Profile retrieved successfully.');
    } catch (err) {
        logger.error(`GetMyProfile Error: ${err.message}`);
        return sendError(res, 'Failed to fetch profile.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const UpdateMyProfile = async (req, res) => {
    try {
        const allowedUpdates = ['fname', 'lname', 'bio', 'socialLinks', 'preferences'];
        const updateData = {};
        
        // Filter out secure fields
        for (const key of Object.keys(req.body)) {
            if (allowedUpdates.includes(key)) {
                updateData[key] = req.body[key];
            }
        }

        const user = await User.findByIdAndUpdate(req.user._id, updateData, { new: true }).select('-password');
        
        return sendSuccess(res, user, 'Profile updated successfully.');
    } catch (err) {
        logger.error(`UpdateMyProfile Error: ${err.message}`);
        return sendError(res, 'Failed to update profile.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

/**
 * Step 12: Creator Application System
 */
export const ApplyForCreator = async (req, res) => {
    try {
        const { portfolioUrl, bio, reason } = req.body;
        
        // Check if application already exists
        const existing = await CreatorApplication.findOne({ userId: req.user._id, status: 'PENDING' });
        if (existing) {
            return sendError(res, 'You already have a pending creator application.', HTTP_STATUS.BAD_REQUEST);
        }

        const app = await CreatorApplication.create({
            userId: req.user._id,
            portfolioUrl,
            bio,
            reason
        });

        return sendSuccess(res, app, 'Creator application submitted successfully.', HTTP_STATUS.CREATED);
    } catch (err) {
        logger.error(`ApplyForCreator Error: ${err.message}`);
        return sendError(res, 'Failed to submit application.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

/**
 * Admin functions for Step 12 & Step 13
 */
export const ReviewCreatorApplication = async (req, res) => {
    try {
        const { applicationId, status } = req.body; // status: APPROVED or REJECTED
        
        const app = await CreatorApplication.findById(applicationId);
        if (!app) return sendError(res, 'Application not found.', HTTP_STATUS.NOT_FOUND);

        app.status = status;
        app.reviewedBy = req.user._id;
        app.reviewDate = new Date();
        await app.save();

        if (status === 'APPROVED') {
            await User.findByIdAndUpdate(app.userId, { role: 'CREATOR' });
            
            // Step 17: Audit Log
            await AuditLog.create({
                userId: app.userId,
                action: 'CREATOR_APPROVAL',
                details: `Approved by admin ${req.user._id}`,
                ipAddress: req.ip
            });
        }

        return sendSuccess(res, app, `Application ${status.toLowerCase()} successfully.`);
    } catch (err) {
        logger.error(`ReviewCreatorApplication Error: ${err.message}`);
        return sendError(res, 'Failed to review application.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

/**
 * Step 13: Account Status Management (Admin)
 */
export const UpdateAccountStatus = async (req, res) => {
    try {
        const { targetUserId, newStatus } = req.body;
        
        const user = await User.findByIdAndUpdate(targetUserId, { accountStatus: newStatus }, { new: true });
        if (!user) return sendError(res, 'User not found.', HTTP_STATUS.NOT_FOUND);

        // Step 17: Audit Log
        await AuditLog.create({
            userId: targetUserId,
            action: 'ACCOUNT_SUSPENSION',
            details: `Status changed to ${newStatus} by admin ${req.user._id}`,
            ipAddress: req.ip
        });

        return sendSuccess(res, { status: user.accountStatus }, 'Account status updated.');
    } catch (err) {
        logger.error(`UpdateAccountStatus Error: ${err.message}`);
        return sendError(res, 'Failed to update account status.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};
