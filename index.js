// Import dependencies
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import useragent from 'express-useragent';
import { captureLocation } from './middleware/ip.js';
import upload from './middleware/upload.js';
import { 
    Admin, VerifyOtpAndLogin, SendOtpForLogin, UpdateUser, Signup, 
    Users, User, Otp, VerifyOtp, ResetPassword, DeletedPrompts 
} from './controllers/User.js';
import { 
    Create, Show, OtherPrompts, PromptDetail, UpdatePrompt, 
    DeletePrompt, RestorePrompt, PermanentlyDelete, GetPrompt, GetPromptFile 
} from './controllers/Prompt.js';
import { RecentActivity, GetActivity } from './controllers/Activity.js';
import { 
    ApprovePrompt, PendingPrompts, ApprovedPrompts, GetStats, GetPromptStats 
} from './controllers/Admin.js';
import { 
    AddToCart, GetCartItems, UpdateQuantity, RemoveItem, ClearCart 
} from './controllers/Cart.js';
import { CheckoutSession } from './controllers/Payment.js';
import { GetOrders, SaveOrder } from './controllers/Order.js';
import { getOrganizations, createOrganization, inviteMember } from './controllers/Organization.js';
import { generateApiKey, executePrompt } from './controllers/ApiGateway.js';
import { getFeed, createPost, likePost } from './controllers/Feed.js';
import { SubmitIssue } from './controllers/Issue.js';
import { startOrchestrator } from './src/orchestrator/index.js';

import config from './src/config/index.js';

const app = express();



// Middleware
app.use(express.json());
app.use(cors());
app.use(useragent.express());

import dotenv from 'dotenv';
dotenv.config();

// MongoDB connection
const dbURI = config.db.uri;
mongoose.connect(dbURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB Atlas!');
})
.catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
});

// Routes
app.post('/User', Users);
app.get('/user/:username', User);
app.get('/user/:username/prompts', OtherPrompts);
app.get('/user/:username/deleted-prompts', DeletedPrompts);
app.post('/user/:username/update', UpdateUser);
app.post('/send-otp-for-login', SendOtpForLogin);  // New OTP-based login route to send OTP
app.post('/verify-otp-and-login', VerifyOtpAndLogin);
app.post('/signup', captureLocation, Signup);
app.post('/create-admin', Admin);

// Prompt Routes
app.post('/createPrompt', upload.single('promptFile'), Create);
app.get('/getPrompt', Show);
app.get('/getPrompts', GetPrompt);
app.get('/prompt/:promptId', PromptDetail);
app.post('/prompt/:promptId/update', upload.single('promptFile'), UpdatePrompt);
app.delete('/prompt/:promptId/delete', DeletePrompt);
app.put('/prompt/:promptId/restore', RestorePrompt);
app.delete('/prompt/:promptId/permanently', PermanentlyDelete);
app.get('/getPromptFile/:promptId', GetPromptFile);

// Activity Routes
app.post('/addActivity', RecentActivity);
app.get('/recentActivity/:username', GetActivity);

// OTP and Password Routes
app.post('/sendOtp', Otp);
app.post('/verifyOtp', VerifyOtp);
app.post('/resetPassword', ResetPassword);

// Admin Routes
app.post('/admin/approvePrompt', ApprovePrompt);
app.get('/admin/pendingPrompts', PendingPrompts);
app.post('/admin/approved/:id', ApprovedPrompts);
// app.delete('/admin/rejected/:id', RejectedPrompts);
app.get('/admin/getStats', GetStats);
app.get('/admin/getPromptStats', GetPromptStats);

// Cart Routes
app.post('/addToCart', AddToCart);
app.get('/getItems', GetCartItems);
app.post('/updateQuantity', UpdateQuantity);
app.post('/removeItem', RemoveItem);
app.post('/create-checkout-session', CheckoutSession);
app.post('/saveOrder', SaveOrder);
app.get('/:username/getOrders', GetOrders);
app.delete('/clear-cart', ClearCart);

// Issues routes
app.post('/submitIssue', SubmitIssue);

// Organization routes
app.get('/organizations', getOrganizations);
app.post('/organizations/create', createOrganization);
app.post('/organizations/:orgId/invite', inviteMember);

// API Gateway routes
app.post('/user/:username/api-keys/generate', generateApiKey);
app.post('/v1/execute', executePrompt);

// Feed routes
app.get('/feed', getFeed);
app.post('/feed/create', createPost);
app.post('/feed/:postId/like', likePost);

// Start the server
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // Optional: Start the autonomous orchestrator in the background
    // startOrchestrator();
});
