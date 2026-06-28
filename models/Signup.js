import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fname: { type: String, required: false },
    lname: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false }, // Nullable for legacy OTP users
    accountType: { type: String, enum: ['user', 'admin'], default: 'user' }, // Legacy role
    role: { 
        type: String, 
        enum: ['USER', 'CREATOR', 'ADMIN', 'SUPER_ADMIN'], 
        default: 'USER' 
    },
    accountStatus: { 
        type: String, 
        enum: ['ACTIVE', 'INACTIVE', 'SUSPENDED', 'BANNED', 'DELETED'], 
        default: 'ACTIVE' 
    },
    isVerified: { type: Boolean, default: false },
    avatar: { type: String, default: '' },
    coverImage: { type: String, default: '' },
    bio: { type: String, default: '' },
    joinedDate: { type: Date, default: Date.now },
    lastLogin: { type: Date, default: null },
    lastActive: { type: Date, default: Date.now },
    creatorProfileId: { type: mongoose.Schema.Types.ObjectId, ref: 'CreatorProfile', default: null },
    
    // Social & Profile Links
    socialLinks: {
        twitter: { type: String, default: '' },
        instagram: { type: String, default: '' },
        website: { type: String, default: '' },
    },
    
    // User Preferences (Step 15)
    preferences: {
        theme: { type: String, enum: ['light', 'dark', 'system'], default: 'dark' },
        notifications: { type: Boolean, default: true },
        language: { type: String, default: 'en' },
        defaultAiProvider: { type: String, default: 'OpenAI' }
    },

    // Legacy Analytics & Location fields
    totalUsers: { type: Number, default: 0 },
    activeUsers: { type: Number, default: 0 },
    location: {
        country: String,
        region: String,
        city: String,
    },
    
    // API Tokens
    apiTokens: [{
        name: String,
        keyHash: String,
        createdAt: { type: Date, default: Date.now }
    }],
}, { 
    timestamps: true 
});

// Indexes for fast lookup
UserSchema.index({ email: 1 });
UserSchema.index({ fname: 1 }); // username equivalent in this system
UserSchema.index({ role: 1 });

// Note: Exporting as SignupModel for backwards compatibility with the existing codebase
export const SignupModel = mongoose.model('users', UserSchema);
