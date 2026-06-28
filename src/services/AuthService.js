import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { SignupModel as User } from '../../models/Signup.js';
import { SessionModel as Session } from '../../models/Session.js';
import config from '../config/index.js';
import crypto from 'crypto';
import NodeCache from 'node-cache';
import nodemailer from 'nodemailer';

const tokenCache = new NodeCache({ stdTTL: 900 }); // Tokens expire in 15 mins

class AuthService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "harshikagawade@gmail.com",
                pass: "nnve hhre ydog lqob",
            },
        });
    }

    async sendEmail(to, subject, text) {
        return this.transporter.sendMail({
            from: "harshikagawade@gmail.com",
            to,
            subject,
            text,
        });
    }
    /**
     * Step 8: Password Security (Validation)
     */
    validatePasswordStrength(password) {
        // Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    }

    /**
     * Step 4: Registration Flow
     */
    async register(userData) {
        const { fname, email, password } = userData;

        if (!this.validatePasswordStrength(password)) {
            throw new Error('Password must be at least 8 characters long and contain uppercase, lowercase, number, and special character.');
        }

        const existingUser = await User.findOne({ $or: [{ email }, { fname }] });
        if (existingUser) {
            throw new Error('Email or username already exists.');
        }

        const saltRounds = 12; // High security
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            ...userData,
            password: hashedPassword,
            role: 'USER',
            accountStatus: 'ACTIVE',
        });

        await newUser.save();
        
        // Remove password before returning
        const userObject = newUser.toObject();
        delete userObject.password;
        
        return userObject;
    }

    /**
     * Step 5: Login Flow (Email or Username)
     */
    async login(identifier, password) {
        const user = await User.findOne({
            $or: [{ email: identifier }, { fname: identifier }]
        });

        if (!user) {
            throw new Error('Invalid credentials.');
        }

        if (user.accountStatus === 'SUSPENDED' || user.accountStatus === 'BANNED' || user.accountStatus === 'DELETED') {
            throw new Error(`Account is ${user.accountStatus.toLowerCase()}.`);
        }

        if (!user.password) {
            throw new Error('This account uses an older authentication method. Please use the OTP flow or reset your password.');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            // TODO: Failed attempt tracking could go here
            throw new Error('Invalid credentials.');
        }

        // Update tracking fields
        user.lastLogin = new Date();
        user.lastActive = new Date();
        await user.save();

        // Step 6: Generate Access & Refresh Tokens
        const accessToken = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            config.security.jwtSecret,
            { expiresIn: '15m' } // Short-lived access token
        );

        const refreshToken = crypto.randomBytes(40).toString('hex');
        const refreshTokenHash = await bcrypt.hash(refreshToken, 10);
        
        // Step 14: Session Management
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

        await Session.create({
            userId: user._id,
            refreshTokenHash,
            expiresAt,
            // deviceInfo and ipAddress would be passed from controller in a real implementation
        });

        return {
            user: {
                id: user._id,
                fname: user.fname,
                email: user.email,
                role: user.role
            },
            accessToken,
            refreshToken
        };
    }

    /**
     * Step 7: Refresh Token Flow
     */
    async refreshTokens(refreshToken) {
        if (!refreshToken) throw new Error('Refresh token is required.');

        // Find a session where the hashed refresh token matches
        // Note: For large scale, store plaintext token in memory/Redis and hashed in DB, 
        // or just lookup by a session ID included in the cookie.
        // For simplicity here, we'll assume the refresh token format is `sessionId:tokenString`
        const [sessionId, tokenString] = refreshToken.split(':');
        
        if (!sessionId || !tokenString) throw new Error('Invalid token format.');

        const session = await Session.findById(sessionId).populate('userId');
        
        if (!session || session.isRevoked || session.expiresAt < new Date()) {
            throw new Error('Session expired or invalid.');
        }

        const isMatch = await bcrypt.compare(tokenString, session.refreshTokenHash);
        if (!isMatch) throw new Error('Invalid refresh token.');

        const user = session.userId;
        if (user.accountStatus !== 'ACTIVE') throw new Error(`Account is ${user.accountStatus.toLowerCase()}.`);

        // Generate new tokens (Token Rotation)
        const accessToken = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            config.security.jwtSecret,
            { expiresIn: '15m' }
        );

        const newRefreshTokenString = crypto.randomBytes(40).toString('hex');
        session.refreshTokenHash = await bcrypt.hash(newRefreshTokenString, 10);
        session.expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        await session.save();

        return {
            accessToken,
            refreshToken: `${session._id}:${newRefreshTokenString}`
        };
    }

    async logoutSession(refreshToken) {
        if (!refreshToken) return;
        const [sessionId] = refreshToken.split(':');
        if (sessionId) {
            await Session.findByIdAndUpdate(sessionId, { isRevoked: true });
        }
    }

    async logoutAllSessions(userId) {
        await Session.updateMany({ userId }, { isRevoked: true });
    }

    /**
     * Step 9: Password Reset Flow
     */
    async forgotPassword(email) {
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found.');

        const resetToken = crypto.randomBytes(32).toString('hex');
        tokenCache.set(`reset_${email}`, resetToken);

        const resetLink = `http://localhost:3000/reset-password?token=${resetToken}&email=${email}`;
        await this.sendEmail(email, 'Password Reset Request', `Click here to reset your password: ${resetLink}. Valid for 15 minutes.`);
    }

    async resetPassword(email, token, newPassword) {
        if (!this.validatePasswordStrength(newPassword)) {
            throw new Error('Password does not meet strength requirements.');
        }

        const cachedToken = tokenCache.get(`reset_${email}`);
        if (!cachedToken || cachedToken !== token) {
            throw new Error('Reset token is invalid or has expired.');
        }

        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found.');

        user.password = await bcrypt.hash(newPassword, 12);
        await user.save();
        
        tokenCache.del(`reset_${email}`);
        
        // Step 14: Logout all sessions on password reset for security
        await this.logoutAllSessions(user._id);
    }

    /**
     * Step 10: Email Verification
     */
    async initiateEmailVerification(email) {
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found.');
        if (user.isVerified) throw new Error('Email is already verified.');

        const verificationToken = crypto.randomBytes(32).toString('hex');
        tokenCache.set(`verify_${email}`, verificationToken, 86400); // 24 hours

        const verifyLink = `http://localhost:3000/verify-email?token=${verificationToken}&email=${email}`;
        await this.sendEmail(email, 'Verify your Email', `Click here to verify your account: ${verifyLink}.`);
    }

    async verifyEmail(email, token) {
        const cachedToken = tokenCache.get(`verify_${email}`);
        if (!cachedToken || cachedToken !== token) {
            throw new Error('Verification token is invalid or has expired.');
        }

        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found.');

        user.isVerified = true;
        await user.save();

        tokenCache.del(`verify_${email}`);
    }
}

export default new AuthService();
