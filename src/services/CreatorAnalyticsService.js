import { CreatorProfileModel as CreatorProfile } from '../../models/CreatorProfile.js';

class CreatorAnalyticsService {
    /**
     * Step 16: Scalable Creator Search & Discovery
     */
    async searchCreators(query = {}) {
        const { search, skills, sort = 'trending', page = 1, limit = 20 } = query;
        
        const matchStage = { status: 'Active', visibility: 'Public' };

        if (search) {
            matchStage.$text = { $search: search };
        }
        if (skills) {
            matchStage.skills = { $in: skills.split(',') };
        }

        let sortStage = { creatorScore: -1 };
        if (search) sortStage = { score: { $meta: 'textScore' } };
        else if (sort === 'trending') sortStage = { followers: -1, totalSales: -1 };
        else if (sort === 'newest') sortStage = { joinedDate: -1 };

        const skip = (Number(page) - 1) * Number(limit);

        const [results, totalCount] = await Promise.all([
            CreatorProfile.find(matchStage, { score: { $meta: 'textScore' } })
                .sort(sortStage)
                .skip(skip)
                .limit(Number(limit))
                .select('-__v'),
            CreatorProfile.countDocuments(matchStage)
        ]);

        return {
            data: results,
            meta: { total: totalCount, page: Number(page) }
        };
    }

    /**
     * Step 12 & 13: Dashboard Metrics and Insights
     */
    async getCreatorDashboard(creatorUsername) {
        const profile = await CreatorProfile.findOne({ username: creatorUsername });
        if (!profile) throw new Error('Creator not found');

        // Note: In a production app with daily snapshots, we would query the snapshots here.
        // For now, we return the robust aggregations on the profile model.
        return {
            overview: {
                followers: profile.followers,
                subscribers: profile.subscribers,
                totalSales: profile.totalSales,
                revenue: profile.totalRevenue,
                promptViews: profile.totalViews,
                score: profile.creatorScore,
                level: profile.creatorLevel
            },
            badges: profile.badges,
            achievements: await this.getCreatorAchievements(profile._id)
        };
    }

    async getCreatorAchievements(creatorId) {
        // We will fetch from Achievement model directly, assuming we imported it
        // Abstracted for brevity
        return []; 
    }
}

export default new CreatorAnalyticsService();
