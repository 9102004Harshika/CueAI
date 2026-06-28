import userRepository from '../repositories/UserRepository.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import config from '../config/index.js';
import NodeCache from 'node-cache';

const otpCache = new NodeCache({ stdTTL: 600 }); // OTP expires in 10 mins

class UserService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "harshikagawade@gmail.com",
                pass: "nnve hhre ydog lqob",
            },
        });
    }

    generateOTP() {
        return Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit OTP for consistency
    }

    async sendOtpEmail(email, otp, isPasswordReset = false) {
        const subject = isPasswordReset ? 'Password Reset OTP' : 'Your OTP for login';
        const text = isPasswordReset 
            ? `Your OTP for password reset is: ${otp}` 
            : `Your one-time password (OTP) is: ${otp}. This OTP is valid for 10 minutes.`;

        const mailOptions = {
            from: "harshikagawade@gmail.com",
            to: email,
            subject,
            text,
        };

        return this.transporter.sendMail(mailOptions);
    }

    async initiateLogin(email) {
        const user = await userRepository.findByEmail(email);
        if (!user) throw new Error('User not found');

        const otp = this.generateOTP();
        otpCache.set(`login_${email}`, otp);
        await this.sendOtpEmail(email, otp);
    }

    async verifyLoginAndGenerateToken(email, otp) {
        const user = await userRepository.findByEmail(email);
        if (!user) throw new Error('User not found');

        const cachedOtp = otpCache.get(`login_${email}`);
        if (!cachedOtp) throw new Error('OTP has expired or is invalid.');
        if (cachedOtp !== otp) throw new Error('Invalid OTP.');

        otpCache.del(`login_${email}`);

        user.lastLogin = new Date();
        await userRepository.update(user);

        const token = jwt.sign(
            { email: user.email, id: user._id },
            config.security.jwtSecret,
            { expiresIn: "1h" }
        );

        return {
            token,
            user: {
                fname: user.fname,
                lname: user.lname,
                email: user.email,
                accountType: user.accountType,
                lastLogin: user.lastLogin,
            }
        };
    }

    async createUser(userData) {
        return await userRepository.create(userData);
    }

    async createAdmin(adminData) {
        adminData.accountType = 'admin';
        return await userRepository.create(adminData);
    }

    async getUserByEmail(email) {
        return await userRepository.findByEmail(email);
    }

    async getUserByUsername(username) {
        return await userRepository.findByUsername(username);
    }

    async updateUser(username, updateData) {
        return await userRepository.updateByUsername(username, updateData);
    }

    async initiatePasswordReset(email) {
        const user = await userRepository.findByEmail(email);
        if (!user) throw new Error('User not found.');

        const otp = this.generateOTP();
        otpCache.set(`reset_${email}`, otp);
        await this.sendOtpEmail(email, otp, true);
    }

    async verifyResetOtp(email, otp) {
        const cachedOtp = otpCache.get(`reset_${email}`);
        if (!cachedOtp) throw new Error('OTP has expired or is invalid.');
        if (cachedOtp !== otp) throw new Error('Invalid OTP.');
        
        otpCache.del(`reset_${email}`);
        return true;
    }

    async resetPassword(email, newPassword) {
        const user = await userRepository.findByEmail(email);
        if (!user) throw new Error('User not found.');

        user.pass = newPassword;
        user.cpass = newPassword;
        await userRepository.update(user);
    }
}

export default new UserService();
