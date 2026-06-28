import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';

// Global Rate Limiter (Standard Protection)
export const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    message: { error: 'Too many requests from this IP, please try again after 15 minutes' }
});

// AI Execution Limiter (Strict Protection for expensive endpoints)
export const aiExecutionLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 minute
    max: 5, // Limit each IP to 5 executions per minute
    message: { error: 'Execution limit reached. Please wait a minute before running another prompt.' }
});

// Authentication Limiter (Brute-force protection)
export const authLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10, // 10 login/register attempts per hour
    message: { error: 'Too many authentication attempts. Please try again later.' }
});

export const configureSecurity = (app) => {
    // 1. HTTP Security Headers
    app.use(helmet());
    
    // 2. NoSQL Injection Prevention
    app.use(mongoSanitize());

    // 3. Global Rate Limiter (applied to all requests by default)
    app.use(globalLimiter);
};
