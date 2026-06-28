import express from 'express';
import cors from 'cors';
import useragent from 'express-useragent';
import dotenv from 'dotenv';

import config from './src/config/index.js';
import requestLogger from './src/middleware/requestLogger.js';
import logger from './src/utils/logger.js';
import { configureSecurity } from './src/middleware/security.js';
import { connectDatabase } from './src/config/db.js';
import { configureSwagger } from './src/config/swagger.js';
import v1Routes from './src/routes/v1.js';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import socketService from './src/services/SocketService.js';
import { errorHandler } from './src/middleware/errorHandler.js';
import http from 'http';

dotenv.config();

const app = express();

// Apply security headers & rate limiting
configureSecurity(app);

// Configure API Documentation (Swagger)
configureSwagger(app);

// Middleware
app.use(compression()); // Compress all responses
app.use(cookieParser()); // Parse cookies
app.use(requestLogger); // Log HTTP requests
app.use(express.json());
app.use(cors());
app.use(useragent.express());

// MongoDB connection
connectDatabase();

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'CueAI Backend Running'
  });
});

// API Version 1 Routes
app.use('/api/v1', v1Routes);

// Fallback Route for non-versioned paths (optional, to avoid breaking frontend immediately)
app.use('/', v1Routes);

// Step 14: Universal Error Handling (Must be last)
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
socketService.initialize(server);

server.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
    logger.info(`API Documentation available at http://localhost:${PORT}/api-docs`);
});
