import express from 'express';
import upload from '../middleware/upload.js';
import { captureLocation } from '../middleware/ip.js';
import { validate } from '../middleware/validate.js';
import { userValidation } from '../validations/user.validation.js';
import { requireAuth, requireAdmin } from '../middleware/auth.js';

import { 
    Admin, VerifyOtpAndLogin, SendOtpForLogin, UpdateUser, Signup, 
    Users, User, Otp, VerifyOtp, ResetPassword as LegacyResetPassword, DeletedPrompts 
} from '../../controllers/User.js';
import {
    Register, Login, Logout, RefreshToken, LogoutAll,
    ForgotPassword, ResetPassword, InitiateEmailVerification, VerifyEmail
} from '../../controllers/Auth.js';
import {
    GetMyProfile, UpdateMyProfile, ApplyForCreator, 
    ReviewCreatorApplication, UpdateAccountStatus
} from '../../controllers/Profile.js';
import {
    SearchMarketplace, GetTrendingPrompts, GetCategoryAnalytics
} from '../../controllers/Marketplace.js';
import {
    CreatePromptDraft, UpdatePrompt, PublishPrompt, ArchivePrompt, SoftDeletePrompt
} from '../../controllers/PromptAPI.js';
import {
    SearchCreators, GetCreatorDashboard, FollowCreator, UnfollowCreator, VerifyCreatorAdmin
} from '../../controllers/CreatorAPI.js';
import {
    GetFeed, CreateFeedPost, ToggleLike, ToggleBookmark
} from '../../controllers/FeedAPI.js';
import {
    CreateSession, RunExecutionStream
} from '../../controllers/PlaygroundAPI.js';
import {
    OptimizePrompt, GenerateMetadata, AnalyzePromptQuality
} from '../../controllers/AIAPI.js';
import {
    GetAdminDashboard, GetCreatorAnalytics, ExportAnalyticsCSV, GetRecommendations
} from '../../controllers/AnalyticsAPI.js';
import {
    GetUserNotifications, MarkAsRead
} from '../../controllers/NotificationAPI.js';
import {
    BanUser, VerifyCreator, ResolveReport, UpdatePlatformSettings
} from '../../controllers/AdminAPI.js';
import { aiExecutionLimiter, authLimiter } from '../middleware/security.js';

// Legacy controller imports
import {
    Create, Show, OtherPrompts, PromptDetail, UpdatePrompt as LegacyUpdatePrompt,
    DeletePrompt, RestorePrompt, PermanentlyDelete, GetPrompt, GetPromptFile
} from '../../controllers/Prompt.js';
import { RecentActivity, GetActivity } from '../../controllers/Activity.js';
import {
    ApprovePrompt, PendingPrompts, ApprovedPrompts, GetStats, GetPromptStats
} from '../../controllers/Admin.js';
import { AddToCart, GetCartItems, UpdateQuantity, RemoveItem, ClearCart } from '../../controllers/Cart.js';
import { CheckoutSession } from '../../controllers/Payment.js';
import { GetOrders, SaveOrder } from '../../controllers/Order.js';
import { getOrganizations, createOrganization, inviteMember } from '../../controllers/Organization.js';
import { generateApiKey, executePrompt } from '../../controllers/ApiGateway.js';
import { SubmitIssue } from '../../controllers/Issue.js';
import { getFeed, createPost, likePost } from '../../controllers/Feed.js';

const router = express.Router();

// Step 13, 17, 19: Kubernetes Health & Liveness Probes
router.get('/health/liveness', (req, res) => res.status(200).json({ status: 'UP' }));
router.get('/health/readiness', (req, res) => {
    // In a real app, verify DB connection here
    res.status(200).json({ status: 'READY' });
});

// Phase 2: New IAM Authentication Routes
router.post('/auth/register', authLimiter, validate(userValidation.signup), Register);
router.post('/auth/login', authLimiter, Login);
router.post('/auth/logout', Logout);
router.post('/auth/refresh', RefreshToken);
router.post('/auth/logout-all', requireAuth, LogoutAll);
router.post('/auth/forgot-password', authLimiter, ForgotPassword);
router.post('/auth/reset-password', authLimiter, ResetPassword);
router.post('/auth/verify-email', authLimiter, InitiateEmailVerification);
router.post('/auth/verify-email/confirm', authLimiter, VerifyEmail);

// Phase 2: Profile & Creator Management
router.get('/users/me', requireAuth, GetMyProfile);
router.patch('/users/me', requireAuth, UpdateMyProfile);
router.post('/creator/apply', requireAuth, ApplyForCreator);

// Phase 2: Admin Security Routes
router.post('/admin/creator-applications/review', requireAuth, requireAdmin, ReviewCreatorApplication);
router.post('/admin/users/status', requireAuth, requireAdmin, UpdateAccountStatus);

// Phase 3: Marketplace Routes
router.get('/marketplace/search', SearchMarketplace);
router.get('/marketplace/trending', GetTrendingPrompts);
router.get('/marketplace/analytics', requireAuth, requireAdmin, GetCategoryAnalytics);

// Phase 3: Prompt Domain API
router.post('/prompts', requireAuth, CreatePromptDraft);
router.patch('/prompts/:id', requireAuth, UpdatePrompt);
router.post('/prompts/:id/publish', requireAuth, PublishPrompt);
router.post('/prompts/:id/archive', requireAuth, ArchivePrompt);
router.delete('/prompts/:id', requireAuth, SoftDeletePrompt);

// Phase 4: Creator Economy Platform Routes
router.get('/creators/search', SearchCreators);
router.get('/creators/:username/dashboard', requireAuth, GetCreatorDashboard);
router.post('/creators/:username/follow', requireAuth, FollowCreator);
router.delete('/creators/:username/follow', requireAuth, UnfollowCreator);
router.post('/admin/creators/:creatorId/verify', requireAuth, requireAdmin, VerifyCreatorAdmin);

// Phase 5: Creator Showcase Feed Routes
router.get('/feed', GetFeed);
router.post('/feed', requireAuth, CreateFeedPost);
router.post('/feed/:id/like', requireAuth, ToggleLike);
router.post('/feed/:id/bookmark', requireAuth, ToggleBookmark);

// Phase 6: Live Playground & Execution Platform (Step 5: Strict Rate Limits)
router.post('/playground/session', requireAuth, aiExecutionLimiter, CreateSession);
router.get('/playground/session/:sessionId/stream', requireAuth, aiExecutionLimiter, RunExecutionStream);

// Phase 7: AI Intelligence Layer & Prompt Engineering (Step 5: Strict Rate Limits)
router.post('/ai/optimize', requireAuth, aiExecutionLimiter, OptimizePrompt);
router.post('/ai/metadata', requireAuth, aiExecutionLimiter, GenerateMetadata);
router.post('/ai/analyze', requireAuth, aiExecutionLimiter, AnalyzePromptQuality);

// Phase 8: Analytics, BI & Recommendation Engine
router.get('/analytics/admin/dashboard', requireAuth, requireAdmin, GetAdminDashboard);
router.get('/analytics/creator/:creatorId', requireAuth, GetCreatorAnalytics);
router.get('/analytics/creator/:creatorId/export', requireAuth, ExportAnalyticsCSV);
router.get('/analytics/recommendations', GetRecommendations); // Open to public, enhanced by auth

// Phase 9: Real-Time Communication & Notifications
router.get('/notifications', requireAuth, GetUserNotifications);
router.patch('/notifications/:notificationId/read', requireAuth, MarkAsRead);

// Phase 10: Platform Management & Governance (Strictly Admin Only)
// Step 21: Security Guards
router.patch('/admin/users/:id/ban', requireAuth, requireAdmin, BanUser);
router.patch('/admin/creators/:id/verify', requireAuth, requireAdmin, VerifyCreator);
router.patch('/admin/reports/:id/resolve', requireAuth, requireAdmin, ResolveReport);
router.patch('/admin/settings', requireAuth, requireAdmin, UpdatePlatformSettings);

// Legacy User Routes
router.post('/User', Users);
router.get('/user/:username', User);
router.get('/user/:username/prompts', OtherPrompts);
router.get('/user/:username/deleted-prompts', requireAuth, DeletedPrompts);
router.post('/user/:username/update', requireAuth, UpdateUser);
router.post('/send-otp-for-login', validate(userValidation.loginOtp), SendOtpForLogin);
router.post('/verify-otp-and-login', validate(userValidation.verifyOtp), VerifyOtpAndLogin);
router.post('/signup', captureLocation, validate(userValidation.signup), Signup);
router.post('/create-admin', requireAuth, requireAdmin, Admin);

// Prompt Routes (Legacy)
router.post('/createPrompt', upload.single('promptFile'), Create);
router.get('/prompts', Show);
router.get('/prompt/:id', PromptDetail);
router.post('/prompt/:id/update', LegacyUpdatePrompt);
router.post('/prompt/:id/delete', DeletePrompt);
router.post('/prompt/:id/restore', RestorePrompt);
router.post('/prompt/:id/permanently-delete', PermanentlyDelete);
router.get('/prompt/details/:id', GetPrompt);
router.get('/prompt/file/:id', GetPromptFile);

// Activity Routes
router.post('/activity', RecentActivity);
router.get('/activity', GetActivity);

// Admin Routes
router.post('/admin/approve-prompt/:id', ApprovePrompt);
router.get('/admin/pending-prompts', PendingPrompts);
router.get('/admin/approved-prompts', ApprovedPrompts);
router.get('/admin/stats', GetStats);
router.get('/admin/prompt-stats', GetPromptStats);

// Cart Routes
router.post('/cart/add', AddToCart);
router.get('/cart/:username', GetCartItems);
router.put('/cart/update/:id', UpdateQuantity);
router.delete('/cart/remove/:id', RemoveItem);
router.delete('/cart/clear/:username', ClearCart);

// Payment Routes
router.post('/create-checkout-session', CheckoutSession);

// Order Routes
router.get('/orders/:username', GetOrders);
router.post('/orders/save', SaveOrder);

// Organization Routes
router.get('/organizations/:username', getOrganizations);
router.post('/organizations', createOrganization);
router.post('/organizations/:organizationId/invite', inviteMember);

// API Gateway Routes
router.post('/api/generate-key', generateApiKey);
router.post('/api/v1/prompts/:promptId/execute', executePrompt);

// Issue Routes
router.post('/issues', SubmitIssue);

// Legacy Feed Routes
router.get('/legacy-feed', getFeed);
router.post('/legacy-feed', createPost);
router.post('/legacy-feed/:postId/like', likePost);

export default router;
