import { PlatformEventModel as PlatformEvent } from '../../models/PlatformEvent.js';
import { PromptModel as Prompt } from '../../models/Prompt.js';
import logger from '../utils/logger.js';

class AnalyticsService {
    
    /**
     * Step 2: Fire-and-forget event tracking
     */
    trackEvent(eventType, payload) {
        // Run asynchronously without blocking the request
        PlatformEvent.create({
            eventType,
            ...payload
        }).catch(err => logger.error(`Analytics Tracking Failed: ${err.message}`));
    }

    /**
     * Step 12, 14: Admin Dashboard Metrics (Materialized via Aggregation)
     */
    async getAdminDashboard() {
        const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

        // Funnel & Revenue Aggregation
        const metrics = await PlatformEvent.aggregate([
            { $match: { createdAt: { $gte: thirtyDaysAgo } } },
            { $group: {
                _id: '$eventType',
                count: { $sum: 1 },
                revenue: { $sum: '$revenueGenerated' }
            }}
        ]);

        const formatted = metrics.reduce((acc, curr) => {
            acc[curr._id] = { count: curr.count, revenue: curr.revenue };
            return acc;
        }, {});

        return {
            totalRevenue: formatted['PROMPT_PURCHASED']?.revenue || 0,
            promptExecutions: formatted['PROMPT_EXECUTED']?.count || 0,
            funnel: {
                views: formatted['PROMPT_VIEWED']?.count || 0,
                purchases: formatted['PROMPT_PURCHASED']?.count || 0
            }
        };
    }

    /**
     * Step 4: Creator Analytics Dashboard
     */
    async getCreatorAnalytics(creatorId) {
        // Aggregate events specific to this creator
        const stats = await PlatformEvent.aggregate([
            { $match: { creatorId: creatorId } },
            { $group: {
                _id: '$eventType',
                count: { $sum: 1 },
                revenue: { $sum: '$revenueGenerated' }
            }}
        ]);

        return stats.reduce((acc, curr) => {
            acc[curr._id] = { count: curr.count, revenue: curr.revenue };
            return acc;
        }, {});
    }
}

export default new AnalyticsService();
