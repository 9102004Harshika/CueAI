import mongoose from 'mongoose';

const PlatformSettingsSchema = new mongoose.Schema({
    // Singleton pattern: We will only ever have 1 document in this collection
    singletonKey: { type: String, default: 'GLOBAL_SETTINGS', unique: true, index: true },
    
    // Step 11, 14: Platform Configurations
    maintenanceMode: { type: Boolean, default: false },
    allowRegistrations: { type: Boolean, default: true },
    defaultAIProvider: { type: String, default: 'Gemini' },
    
    // Step 10: Content Governance
    requireManualPromptApproval: { type: Boolean, default: false },
    
    lastUpdatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', default: null }
}, { timestamps: true });

export const PlatformSettingsModel = mongoose.model('PlatformSettings', PlatformSettingsSchema);
