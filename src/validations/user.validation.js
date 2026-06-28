import { z } from 'zod';

export const userValidation = {
    signup: {
        body: z.object({
            username: z.string().min(3).max(30),
            email: z.string().email(),
            password: z.string().min(6)
        })
    },
    loginOtp: {
        body: z.object({
            email: z.string().email()
        })
    },
    verifyOtp: {
        body: z.object({
            email: z.string().email(),
            otp: z.string().length(6)
        })
    }
};
