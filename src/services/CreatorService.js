import { CreatorProfileModel as CreatorProfile } from '../../models/CreatorProfile.js';
import { CreatorActivityModel as CreatorActivity } from '../../models/CreatorActivity.js';
import { AchievementModel as Achievement } from '../../models/Achievement.js';
import { FollowModel as Follow } from '../../models/Follow.js';

class CreatorService {
    /**
     * Step 3: Creator Application Integration
     * Hooked in when Admin approves a Phase 2 CreatorApplication
     */
    async provisionCreatorProfile(user) {
        // Ensure no duplicates
        let profile = await CreatorProfile.findOne({ userId: user._id });
        if (profile) return profile;

        profile = await CreatorProfile.create({
            userId: user._id,
            displayName: `${user.fname} ${user.lname}`.trim(),
            username: user.username || user.fname.toLowerCase(),
            joinedDate: new Date()
        });

        await this.logActivity(profile._id, 'VERIFIED', 'Welcome to the Cue AI Creator Economy!');
        return profile;
    }

    /**
     * Step 4: Follow System
     */
    async followCreator(followerId, creatorUsername) {
        const creator = await CreatorProfile.findOne({ username: creatorUsername });
        if (!creator) throw new Error('Creator not found.');

        try {
            await Follow.create({ followerId, creatorId: creator._id });
            await CreatorProfile.findByIdAndUpdate(creator._id, { $inc: { followers: 1 } });
            
            // Check milestones
            if (creator.followers + 1 === 100) {
                await this.grantAchievement(creator._id, '100_FOLLOWERS', 'Rising Star', 'Reached 100 followers!');
            }
        } catch (err) {
            if (err.code === 11000) throw new Error('You are already following this creator.');
            throw err;
        }
    }

    async unfollowCreator(followerId, creatorUsername) {
        const creator = await CreatorProfile.findOne({ username: creatorUsername });
        if (!creator) throw new Error('Creator not found.');

        const result = await Follow.findOneAndDelete({ followerId, creatorId: creator._id });
        if (result) {
            await CreatorProfile.findByIdAndUpdate(creator._id, { $inc: { followers: -1 } });
        }
    }

    /**
     * Step 6 & 18: Admin Verification & Badges
     */
    async verifyCreator(creatorId, adminId) {
        const creator = await CreatorProfile.findByIdAndUpdate(creatorId, { verifiedStatus: 'Verified' }, { new: true });
        
        await this.logActivity(creatorId, 'VERIFIED', 'Your profile has been verified by the Cue AI team!');
        await this.grantAchievement(creatorId, 'VERIFIED_CREATOR', 'Verified', 'Official Cue AI Creator');
        
        return creator;
    }

    /**
     * Step 7, 8 & 9: Reputation Engine, Levels, and Dynamic Badges
     * This would typically run in a nightly CRON job or via Event Triggers.
     */
    async calculateReputation(creatorId) {
        const creator = await CreatorProfile.findById(creatorId);
        if (!creator) return;

        // Arbitrary Reputation Formula (Step 9)
        const baseScore = (creator.totalSales * 10) + (creator.followers * 5) + (creator.totalExecutions * 2);
        const qualityMultiplier = creator.averageRating > 0 ? (creator.averageRating / 5) : 1;
        const finalScore = Math.round(baseScore * qualityMultiplier);

        // Calculate Level (Step 8)
        let level = 'Beginner';
        if (finalScore > 100000) level = 'Legend';
        else if (finalScore > 50000) level = 'Elite';
        else if (finalScore > 10000) level = 'Expert';
        else if (finalScore > 2000) level = 'Professional';
        else if (finalScore > 500) level = 'Intermediate';

        // Compute Dynamic Badges (Step 7)
        const badges = [];
        if (creator.verifiedStatus === 'Verified') badges.push('Verified Creator');
        if (creator.totalSales > 1000) badges.push('Top Seller');
        if (creator.averageRating >= 4.8 && creator.totalRatings > 50) badges.push('Marketplace Expert');

        // Apply Updates
        creator.creatorScore = finalScore;
        creator.creatorLevel = level;
        creator.badges = badges;
        await creator.save();

        return creator;
    }

    /**
     * Helpers for Steps 14 & 15
     */
    async logActivity(creatorId, type, message) {
        await CreatorActivity.create({ creatorId, type, message });
    }

    async grantAchievement(creatorId, achievementId, name, description) {
        try {
            await Achievement.create({ creatorId, achievementId, name, description });
            await this.logActivity(creatorId, 'BADGE_EARNED', `Unlocked Achievement: ${name}`);
        } catch (err) {
            // Ignore 11000 (duplicate), meaning they already have the achievement
        }
    }
}

export default new CreatorService();
