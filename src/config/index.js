import dotenv from 'dotenv';
dotenv.config();

export default {
    app: {
        port: process.env.PORT || 5000,
        env: process.env.NODE_ENV || 'development',
    },
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/CueAI',
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'cueAi',
    },
    security: {
        jwtSecret: process.env.JWT_SECRET || 'cueAi',
    },
    stripe: {
        secretKey: process.env.SECRET_KEY || '',
    },
};
