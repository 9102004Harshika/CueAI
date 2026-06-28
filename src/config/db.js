import mongoose from 'mongoose';
import config from './index.js';
import logger from '../utils/logger.js';

export const connectDatabase = async () => {
    try {
        await mongoose.connect(config.db.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
            maxPoolSize: 10, // Maintain up to 10 socket connections
        });
        logger.info('Connected to MongoDB Atlas successfully!');
    } catch (error) {
        logger.error('Error connecting to MongoDB Atlas:', error);
        process.exit(1); // Exit process with failure
    }

    mongoose.connection.on('disconnected', () => {
        logger.warn('MongoDB disconnected. Attempting to reconnect...');
    });

    mongoose.connection.on('error', (err) => {
        logger.error(`MongoDB connection error: ${err}`);
    });
};
