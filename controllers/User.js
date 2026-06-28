import userService from '../src/services/UserService.js';
import { PromptModel } from "../models/Prompt.js";
import logger from '../src/utils/logger.js';

export const SendOtpForLogin = async (req, res) => {
    try {
        await userService.initiateLogin(req.body.email);
        res.status(200).json({ message: 'OTP sent to your email' });
    } catch (err) {
        logger.error(`SendOtpForLogin Error: ${err.message}`);
        const status = err.message === 'User not found' ? 404 : 500;
        res.status(status).json({ message: err.message });
    }
};

export const VerifyOtpAndLogin = async (req, res) => {
    try {
        const result = await userService.verifyLoginAndGenerateToken(req.body.email, req.body.otp);
        res.json({ message: 'Login successful', ...result });
    } catch (err) {
        logger.error(`VerifyOtpAndLogin Error: ${err.message}`);
        const status = err.message.includes('OTP') ? 400 : 404;
        res.status(status).json({ message: err.message });
    }
};

export const Signup = async (req, res) => {
    try {
        const userData = { ...req.body, location: req.location };
        const savedUser = await userService.createUser(userData);
        res.json(savedUser);
    } catch (err) {
        logger.error(`Signup Error: ${err.message}`);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const Admin = async (req, res) => {
    try {
        await userService.createAdmin(req.body);
        res.status(200).json({ message: 'Admin created successfully' });
    } catch (err) {
        logger.error(`Admin Create Error: ${err.message}`);
        res.status(500).json({ error: err.message });
    }
};

export const Users = async (req, res) => {
    try {
        const user = await userService.getUserByEmail(req.body.email);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
        logger.error(`Users Error: ${err.message}`);
        res.status(500).json({ error: err.message });
    }
};

export const User = async (req, res) => {
    try {
        const user = await userService.getUserByUsername(req.params.username);
        if (user) {
            res.status(200).json({
                fname: user.fname,
                lname: user.lname,
                email: user.email,
                joinedDate: user.joinedDate,
                bio: user.bio,
                twitter: user.twitter,
                instagram: user.instagram,
                website: user.website,
                image: user.image
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        logger.error(`User Get Error: ${err.message}`);
        res.status(500).json({ error: err.message });
    }
};

export const UpdateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.username, req.body);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        logger.error(`UpdateUser Error: ${error.message}`);
        res.status(500).json({ message: error.message });
    }
};

export const Otp = async (req, res) => {
    try {
        await userService.initiatePasswordReset(req.body.email);
        res.status(200).json({ message: 'OTP sent successfully.' });
    } catch (err) {
        logger.error(`Otp Password Reset Error: ${err.message}`);
        const status = err.message === 'User not found.' ? 404 : 500;
        res.status(status).json({ message: err.message });
    }
};

export const VerifyOtp = async (req, res) => {
    try {
        await userService.verifyResetOtp(req.body.email, req.body.otp);
        res.status(200).json({ message: 'OTP verified successfully.' });
    } catch (err) {
        logger.error(`VerifyOtp Error: ${err.message}`);
        res.status(400).json({ message: err.message });
    }
};

export const ResetPassword = async (req, res) => {
    try {
        await userService.resetPassword(req.body.email, req.body.newPassword);
        res.status(200).json({ message: 'Password reset successfully.' });
    } catch (error) {
        logger.error(`ResetPassword Error: ${error.message}`);
        const status = error.message === 'User not found.' ? 404 : 500;
        res.status(status).json({ message: error.message });
    }
};

// Moving Prompts logic into a generic repo/service would happen in later refactoring phases
export const DeletedPrompts = async (req, res) => {
    try {
        const { username } = req.params;
        const deletedPrompts = await PromptModel.find({ user: username, deleted: true });
        res.json(deletedPrompts);
    } catch (error) {
        logger.error(`DeletedPrompts Error: ${error.message}`);
        res.status(500).send('Error fetching deleted prompts: ' + error.message);
    }
};
