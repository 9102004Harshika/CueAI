import { AuditLogModel as AuditLog } from '../../models/AuditLog.js';
import { SignupModel as User } from '../../models/Signup.js';
import { CreatorProfileModel as CreatorProfile } from '../../models/CreatorProfile.js';
import { PromptModel as Prompt } from '../../models/Prompt.js';
import { ReportModel as Report } from '../../models/Report.js';
import { PlatformSettingsModel as PlatformSettings } from '../../models/PlatformSettings.js';
import logger from '../utils/logger.js';

class AdminService {

    /**
     * Step 16: Immutable Audit Logging internally wrapped for all Admin methods
     */
    async _logAudit(adminId, action, targetId, targetType, meta = {}) {
        await AuditLog.create({
            adminId,
            action,
            targetId,
            targetType,
            metadata: meta
        }).catch(err => logger.error(`Audit Log Failed: ${err.message}`));
    }

    /**
     * Step 3: User Management (Ban)
     */
    async banUser(adminId, targetUserId, reason) {
        const user = await User.findByIdAndUpdate(targetUserId, { status: 'BANNED' }, { new: true });
        if (!user) throw new Error('User not found');
        
        await this._logAudit(adminId, 'USER_BANNED', targetUserId, 'User', { reason });
        return user;
    }

    /**
     * Step 4: Creator Management (Verify)
     */
    async verifyCreator(adminId, creatorId) {
        const creator = await CreatorProfile.findByIdAndUpdate(creatorId, { isVerified: true }, { new: true });
        if (!creator) throw new Error('Creator not found');
        
        await this._logAudit(adminId, 'CREATOR_VERIFIED', creatorId, 'CreatorProfile');
        return creator;
    }

    /**
     * Step 5, 8: Moderation Workflow - Resolve Report and take action
     */
    async resolveReport(adminId, reportId, resolutionAction, notes) {
        const report = await Report.findById(reportId);
        if (!report) throw new Error('Report not found');

        report.status = 'RESOLVED';
        report.assignedModerator = adminId;
        report.resolutionNotes = notes;
        await report.save();

        if (resolutionAction === 'DELETE_CONTENT') {
            if (report.targetType === 'Prompt') {
                await Prompt.findByIdAndUpdate(report.targetId, { status: 'DELETED' });
                await this._logAudit(adminId, 'PROMPT_DELETED', report.targetId, 'Prompt');
            }
        }

        return report;
    }

    /**
     * Step 11: Settings Management
     */
    async updateSettings(adminId, settingsUpdate) {
        const settings = await PlatformSettings.findOneAndUpdate(
            { singletonKey: 'GLOBAL_SETTINGS' },
            { $set: { ...settingsUpdate, lastUpdatedBy: adminId } },
            { new: true, upsert: true }
        );

        await this._logAudit(adminId, 'SETTINGS_CHANGED', settings._id, 'Settings', settingsUpdate);
        return settings;
    }
}

export default new AdminService();
