import { Server } from 'socket.io';
import logger from '../utils/logger.js';
import EventBus from './EventBus.js';

class SocketService {
    initialize(server) {
        this.io = new Server(server, {
            cors: {
                origin: process.env.REACT_APP_CLIENT_URL || '*',
                methods: ['GET', 'POST']
            }
        });

        // Step 20: Socket Security (Authentication stub)
        this.io.use((socket, next) => {
            const token = socket.handshake.auth.token;
            // Validate JWT here in a real app, attach user ID to socket
            socket.userId = 'mock-user-id'; 
            next();
        });

        this.io.on('connection', (socket) => {
            logger.info(`Socket connected: ${socket.id}`);
            
            // Join a private room for user-specific real-time events
            if (socket.userId) {
                socket.join(`user_${socket.userId}`);
            }

            socket.on('disconnect', () => {
                logger.info(`Socket disconnected: ${socket.id}`);
            });
        });

        this._setupEventSubscribers();
    }

    /**
     * Step 5, 24: Listen to internal EventBus and fan out to WebSockets
     */
    _setupEventSubscribers() {
        EventBus.on('NOTIFICATION_CREATED', (notification) => {
            // Push live to the specific recipient's room
            this.io.to(`user_${notification.recipient}`).emit('NEW_NOTIFICATION', notification);
        });

        EventBus.on('LIVE_FEED_UPDATE', (payload) => {
            // Push globally to anyone browsing the feed
            this.io.emit('FEED_REFRESH', payload);
        });
    }
}

export default new SocketService();
