import creatorService from '../src/services/CreatorService.js';
import creatorAnalyticsService from '../src/services/CreatorAnalyticsService.js';
import { sendSuccess, sendError } from '../src/utils/responseHandler.js';
import { HTTP_STATUS } from '../src/constants/messages.js';
import logger from '../src/utils/logger.js';

export const SearchCreators = async (req, res) => {
    try {
        const result = await creatorAnalyticsService.searchCreators(req.query);
        return sendSuccess(res, result, 'Creators retrieved.');
    } catch (err) {
        logger.error(`SearchCreators Error: ${err.message}`);
        return sendError(res, 'Failed to search creators.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const GetCreatorDashboard = async (req, res) => {
    try {
        const { username } = req.params;
        const dashboard = await creatorAnalyticsService.getCreatorDashboard(username);
        return sendSuccess(res, dashboard, 'Creator dashboard retrieved.');
    } catch (err) {
        logger.error(`GetCreatorDashboard Error: ${err.message}`);
        return sendError(res, err.message, HTTP_STATUS.BAD_REQUEST);
    }
};

export const FollowCreator = async (req, res) => {
    try {
        const { username } = req.params;
        await creatorService.followCreator(req.user._id, username);
        return sendSuccess(res, null, `You are now following ${username}.`);
    } catch (err) {
        logger.error(`FollowCreator Error: ${err.message}`);
        return sendError(res, err.message, HTTP_STATUS.BAD_REQUEST);
    }
};

export const UnfollowCreator = async (req, res) => {
    try {
        const { username } = req.params;
        await creatorService.unfollowCreator(req.user._id, username);
        return sendSuccess(res, null, `You unfollowed ${username}.`);
    } catch (err) {
        logger.error(`UnfollowCreator Error: ${err.message}`);
        return sendError(res, err.message, HTTP_STATUS.BAD_REQUEST);
    }
};

export const VerifyCreatorAdmin = async (req, res) => {
    try {
        const { creatorId } = req.params;
        const creator = await creatorService.verifyCreator(creatorId, req.user._id);
        return sendSuccess(res, creator, 'Creator successfully verified.');
    } catch (err) {
        logger.error(`VerifyCreatorAdmin Error: ${err.message}`);
        return sendError(res, err.message, HTTP_STATUS.BAD_REQUEST);
    }
};
