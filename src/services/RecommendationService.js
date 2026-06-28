import { PromptModel as Prompt } from '../../models/Prompt.js';
import { PlatformEventModel as PlatformEvent } from '../../models/PlatformEvent.js';

class RecommendationService {
    
    /**
     * Step 8: Recommendation Engine Foundation
     * Uses hybrid approach: Recent User Categories + Global Trending
     */
    async getRecommendations(userId, limit = 10) {
        let preferredCategories = [];

        if (userId) {
            // Find categories user recently executed or purchased
            const recentEvents = await PlatformEvent.find({
                userId,
                eventType: { $in: ['PROMPT_EXECUTED', 'PROMPT_PURCHASED'] }
            }).sort({ createdAt: -1 }).limit(20).populate('promptId', 'category');

            const categories = recentEvents
                .filter(e => e.promptId && e.promptId.category)
                .map(e => e.promptId.category);
            
            preferredCategories = [...new Set(categories)]; // Unique
        }

        const matchStage = { status: 'PUBLISHED' };
        if (preferredCategories.length > 0) {
            matchStage.category = { $in: preferredCategories };
        }

        // Fallback to trending if no user history
        const recommendations = await Prompt.find(matchStage)
            .sort({ totalSales: -1, averageRating: -1 }) // Simple fallback sorting
            .limit(limit)
            .lean(); // Step 7: Optimization to bypass Mongoose document hydration

        return recommendations;
    }
}

export default new RecommendationService();
