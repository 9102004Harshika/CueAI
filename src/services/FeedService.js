import { FeedPostModel as FeedPost } from '../../models/FeedPost.js';
import { PostInteractionModel as PostInteraction } from '../../models/PostInteraction.js';
import { PostCommentModel as PostComment } from '../../models/PostComment.js';

class FeedService {
    /**
     * Step 4: Post Creation
     */
    async createPost(creatorId, postData) {
        const post = await FeedPost.create({
            creatorId,
            ...postData,
            status: postData.publishNow ? 'PUBLISHED' : 'DRAFT',
            publishedAt: postData.publishNow ? new Date() : null
        });
        return post;
    }

    /**
     * Step 3, 5, 12, 13: The Discovery Algorithm & Cursor Pagination
     */
    async getFeed(query = {}) {
        const {
            cursor, // Represents the trendingScore of the last fetched item
            lastId, // Represents the _id of the last fetched item (tie-breaker)
            category,
            tags,
            type = 'trending', // 'trending', 'newest', 'following'
            limit = 15
        } = query;

        const matchStage = { status: 'PUBLISHED', visibility: 'Public', deletedAt: null };

        // Step 13: Filters
        if (category) matchStage.category = category;
        if (tags) matchStage.tags = { $in: tags.split(',') };

        // Step 3 & 24: Cursor Pagination Logic
        if (cursor && lastId) {
            if (type === 'trending') {
                matchStage.$or = [
                    { trendingScore: { $lt: Number(cursor) } },
                    { trendingScore: Number(cursor), _id: { $lt: lastId } }
                ];
            } else if (type === 'newest') {
                matchStage.$or = [
                    { publishedAt: { $lt: new Date(cursor) } },
                    { publishedAt: new Date(cursor), _id: { $lt: lastId } }
                ];
            }
        }

        // Sort Direction
        const sortStage = type === 'trending' 
            ? { trendingScore: -1, _id: -1 } 
            : { publishedAt: -1, _id: -1 };

        const posts = await FeedPost.find(matchStage)
            .sort(sortStage)
            .limit(Number(limit))
            .populate('creatorId', 'displayName username avatar verifiedStatus badges')
            .populate('linkedPrompt', 'title price averageRating')
            .lean(); // Lean for performance (Step 24)

        // Construct next cursor
        let nextCursor = null;
        let nextId = null;
        if (posts.length > 0) {
            const lastPost = posts[posts.length - 1];
            nextCursor = type === 'trending' ? lastPost.trendingScore : lastPost.publishedAt;
            nextId = lastPost._id;
        }

        return {
            data: posts,
            meta: {
                nextCursor,
                nextId,
                hasMore: posts.length === Number(limit)
            }
        };
    }

    /**
     * Step 5: The Discovery Algorithm (Cron Job / Worker Target)
     * Recalculates trending scores across active posts.
     */
    async recalculateTrendingScores() {
        // Find posts published in the last 7 days
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        
        const posts = await FeedPost.find({ 
            status: 'PUBLISHED', 
            publishedAt: { $gte: sevenDaysAgo } 
        }).select('_id likesCount commentsCount promptRunsCount publishedAt');

        const bulkOps = posts.map(post => {
            const hoursSincePublished = Math.max(0.1, (Date.now() - post.publishedAt) / (1000 * 60 * 60));
            
            // Gravity Formula: (Likes*2 + Comments*3 + Runs*5) / (Hours^1.5)
            const engagement = (post.likesCount * 2) + (post.commentsCount * 3) + (post.promptRunsCount * 5);
            const score = engagement / Math.pow(hoursSincePublished, 1.5);

            return {
                updateOne: {
                    filter: { _id: post._id },
                    update: { $set: { trendingScore: score } }
                }
            };
        });

        if (bulkOps.length > 0) {
            await FeedPost.bulkWrite(bulkOps);
        }
    }

    /**
     * Steps 6 & 7: Interactions (Like/Bookmark)
     */
    async toggleInteraction(userId, postId, interactionType) {
        const existing = await PostInteraction.findOne({ userId, postId, interactionType });
        
        const fieldMap = {
            'LIKE': 'likesCount',
            'BOOKMARK': 'bookmarksCount',
            'SHARE': 'sharesCount'
        };
        const incrementField = fieldMap[interactionType];

        if (existing) {
            await PostInteraction.findByIdAndDelete(existing._id);
            await FeedPost.findByIdAndUpdate(postId, { $inc: { [incrementField]: -1 } });
            return { state: 'removed' };
        } else {
            await PostInteraction.create({ userId, postId, interactionType });
            await FeedPost.findByIdAndUpdate(postId, { $inc: { [incrementField]: 1 } });
            return { state: 'added' };
        }
    }
}

export default new FeedService();
