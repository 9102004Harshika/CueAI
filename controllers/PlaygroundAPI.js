import executionService from '../src/services/ExecutionService.js';
import { sendSuccess, sendError } from '../src/utils/responseHandler.js';
import { HTTP_STATUS } from '../src/constants/messages.js';
import logger from '../src/utils/logger.js';

export const CreateSession = async (req, res) => {
    try {
        const session = await executionService.createSession(req.user._id, req.body);
        return sendSuccess(res, session, 'Playground session initialized.', HTTP_STATUS.CREATED);
    } catch (err) {
        logger.error(`CreateSession Error: ${err.message}`);
        return sendError(res, 'Failed to initialize session.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const RunExecutionStream = async (req, res) => {
    const { sessionId } = req.params;

    // Setup Server-Sent Events (SSE) (Step 6)
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const onChunk = (chunk) => {
        res.write(`data: ${JSON.stringify({ chunk })}\n\n`);
    };

    try {
        const session = await executionService.executeSession(sessionId, onChunk);
        res.write(`data: ${JSON.stringify({ done: true, session })}\n\n`);
        res.end();
    } catch (err) {
        logger.error(`RunExecutionStream Error: ${err.message}`);
        res.write(`data: ${JSON.stringify({ error: err.message })}\n\n`);
        res.end();
    }
};
