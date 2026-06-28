import morgan from 'morgan';
import logger from '../utils/logger.js';

// Setup morgan to pipe logs to Winston
const stream = {
    write: (message) => logger.info(message.trim())
};

// Skip logging for testing environments
const skip = () => {
    const env = process.env.NODE_ENV || 'development';
    return env === 'test';
};

const requestLogger = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    { stream, skip }
);

export default requestLogger;
