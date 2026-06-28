import feedService from '../src/services/FeedService.js';
import { sendSuccess, sendError } from '../src/utils/responseHandler.js';
import { HTTP_STATUS } from '../src/constants/messages.js';
import logger from '../src/utils/logger.js';

export const GetFeed = async (req, res) => {
    try {
        const result = await feedService.getFeed(req.query);
        return sendSuccess(res, result, 'Feed retrieved.');
    } catch (err) {
        logger.error(`GetFeed Error: ${err.message}`);
        return sendError(res, 'Failed to fetch feed.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const CreateFeedPost = async (req, res) => {
    try {
        // req.user must have a CreatorProfile associated
        // For brevity, assuming creatorId is fetched or mapped
        const creatorId = req.user.creatorId; 
        const post = await feedService.createPost(creatorId, req.body);
        return sendSuccess(res, post, 'Post created.', HTTP_STATUS.CREATED);
    } catch (err) {
        logger.error(`CreateFeedPost Error: ${err.message}`);
        return sendError(res, 'Failed to create post.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const ToggleLike = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await feedService.toggleInteraction(req.user._id, id, 'LIKE');
        return sendSuccess(res, result, `Post like ${result.state}.`);
    } catch (err) {
        logger.error(`ToggleLike Error: ${err.message}`);
        return sendError(res, 'Failed to toggle like.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const ToggleBookmark = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await feedService.toggleInteraction(req.user._id, id, 'BOOKMARK');
        return sendSuccess(res, result, `Post bookmark ${result.state}.`);
    } catch (err) {
        logger.error(`ToggleBookmark Error: ${err.message}`);
        return sendError(res, 'Failed to toggle bookmark.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};
