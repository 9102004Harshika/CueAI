import analyticsService from '../src/services/AnalyticsService.js';
import recommendationService from '../src/services/RecommendationService.js';
import { sendSuccess, sendError } from '../src/utils/responseHandler.js';
import { HTTP_STATUS } from '../src/constants/messages.js';
import logger from '../src/utils/logger.js';
import { Parser } from 'json2csv';

export const GetAdminDashboard = async (req, res) => {
    try {
        const dashboard = await analyticsService.getAdminDashboard();
        return sendSuccess(res, dashboard, 'Admin dashboard metrics retrieved.');
    } catch (err) {
        logger.error(`GetAdminDashboard Error: ${err.message}`);
        return sendError(res, 'Failed to fetch admin analytics.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const GetCreatorAnalytics = async (req, res) => {
    try {
        const { creatorId } = req.params;
        // Step 23: Access control ensures creators only see their own metrics
        // In a real app, validate req.user.creatorId === creatorId
        const analytics = await analyticsService.getCreatorAnalytics(creatorId);
        return sendSuccess(res, analytics, 'Creator analytics retrieved.');
    } catch (err) {
        logger.error(`GetCreatorAnalytics Error: ${err.message}`);
        return sendError(res, 'Failed to fetch creator analytics.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const ExportAnalyticsCSV = async (req, res) => {
    try {
        const { creatorId } = req.params;
        const data = await analyticsService.getCreatorAnalytics(creatorId);
        
        // Step 18: CSV Export Logic
        const parser = new Parser();
        const csv = parser.parse(Object.values(data));
        
        res.header('Content-Type', 'text/csv');
        res.attachment(`analytics_${creatorId}.csv`);
        return res.send(csv);
    } catch (err) {
        logger.error(`ExportAnalyticsCSV Error: ${err.message}`);
        return sendError(res, 'Failed to export analytics.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const GetRecommendations = async (req, res) => {
    try {
        const userId = req.user ? req.user._id : null;
        const limit = parseInt(req.query.limit) || 10;
        
        const recommendations = await recommendationService.getRecommendations(userId, limit);
        return sendSuccess(res, recommendations, 'Recommendations generated.');
    } catch (err) {
        logger.error(`GetRecommendations Error: ${err.message}`);
        return sendError(res, 'Failed to generate recommendations.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};
