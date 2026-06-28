import { PromptModel as Prompt } from '../../models/Prompt.js';
import mongoose from 'mongoose';

class MarketplaceService {
    /**
     * Steps 11 & 12: Marketplace Search and Filtering
     */
    async searchPrompts(query = {}) {
        const {
            search,
            category,
            minPrice,
            maxPrice,
            difficulty,
            language,
            tags,
            sort = 'newest',
            page = 1,
            limit = 20
        } = query;

        const matchStage = { status: 'PUBLISHED', deleted: false, visibility: 'Public' };

        // 11. Text Search
        if (search) {
            matchStage.$text = { $search: search };
        }

        // 12. Filtering
        if (category) matchStage.category = new mongoose.Types.ObjectId(category);
        if (difficulty) matchStage.difficulty = difficulty;
        if (language) matchStage.language = language;
        if (tags) matchStage.tags = { $in: tags.split(',') };
        
        if (minPrice !== undefined || maxPrice !== undefined) {
            matchStage.price = {};
            if (minPrice !== undefined) matchStage.price.$gte = Number(minPrice);
            if (maxPrice !== undefined) matchStage.price.$lte = Number(maxPrice);
        }

        // Sorting Logic
        let sortStage = { createdAt: -1 }; // newest default
        if (search) sortStage = { score: { $meta: 'textScore' } };
        else if (sort === 'popular') sortStage = { totalViews: -1, totalSales: -1 };
        else if (sort === 'trending') sortStage = { totalExecutions: -1, createdAt: -1 };
        else if (sort === 'highest-rated') sortStage = { averageRating: -1 };
        else if (sort === 'price-low') sortStage = { price: 1 };
        else if (sort === 'price-high') sortStage = { price: -1 };

        const skip = (Number(page) - 1) * Number(limit);

        const pipeline = [
            { $match: matchStage },
            { $sort: sortStage },
            { $skip: skip },
            { $limit: Number(limit) },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'creator'
                }
            },
            { $unwind: '$creator' },
            {
                $project: {
                    'prompt.data': 0, // Never return binary data in search
                    'creator.password': 0,
                    'creator.apiTokens': 0
                }
            }
        ];

        const [results, totalCount] = await Promise.all([
            Prompt.aggregate(pipeline),
            Prompt.countDocuments(matchStage)
        ]);

        return {
            data: results,
            meta: {
                total: totalCount,
                page: Number(page),
                pages: Math.ceil(totalCount / Number(limit))
            }
        };
    }

    /**
     * Step 17: Track Prompt Statistics
     */
    async recordView(promptId) {
        await Prompt.findByIdAndUpdate(promptId, { $inc: { totalViews: 1 } });
    }

    async recordExecution(promptId) {
        await Prompt.findByIdAndUpdate(promptId, { $inc: { totalExecutions: 1 } });
    }

    /**
     * Step 18: Marketplace Analytics (Aggregation Pipelines)
     */
    async getTrendingPrompts() {
        return Prompt.find({ status: 'PUBLISHED', deleted: false })
            .sort({ totalViews: -1, totalSales: -1 })
            .limit(10)
            .select('-prompt.data');
    }

    async getCategoryPerformance() {
        return Prompt.aggregate([
            { $match: { status: 'PUBLISHED', deleted: false } },
            {
                $group: {
                    _id: '$category',
                    totalSales: { $sum: '$totalSales' },
                    averagePrice: { $avg: '$price' },
                    promptCount: { $sum: 1 }
                }
            },
            {
                $lookup: {
                    from: 'categories',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'categoryDetails'
                }
            },
            { $unwind: { path: '$categoryDetails', preserveNullAndEmptyArrays: true } },
            { $sort: { totalSales: -1 } }
        ]);
    }
}

export default new MarketplaceService();
