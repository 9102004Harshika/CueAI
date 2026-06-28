import marketplaceService from '../src/services/MarketplaceService.js';
import { sendSuccess, sendError } from '../src/utils/responseHandler.js';
import { HTTP_STATUS } from '../src/constants/messages.js';
import logger from '../src/utils/logger.js';

export const SearchMarketplace = async (req, res) => {
    try {
        const result = await marketplaceService.searchPrompts(req.query);
        return sendSuccess(res, result, 'Search results retrieved.');
    } catch (err) {
        logger.error(`SearchMarketplace Error: ${err.message}`);
        return sendError(res, 'Failed to search marketplace.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const GetTrendingPrompts = async (req, res) => {
    try {
        const trending = await marketplaceService.getTrendingPrompts();
        return sendSuccess(res, trending, 'Trending prompts retrieved.');
    } catch (err) {
        logger.error(`GetTrendingPrompts Error: ${err.message}`);
        return sendError(res, 'Failed to retrieve trending prompts.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const GetCategoryAnalytics = async (req, res) => {
    try {
        const analytics = await marketplaceService.getCategoryPerformance();
        return sendSuccess(res, analytics, 'Category analytics retrieved.');
    } catch (err) {
        logger.error(`GetCategoryAnalytics Error: ${err.message}`);
        return sendError(res, 'Failed to retrieve analytics.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};
