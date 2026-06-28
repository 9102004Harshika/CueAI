import aiLayerService from '../src/services/AILayerService.js';
import { sendSuccess, sendError } from '../src/utils/responseHandler.js';
import { HTTP_STATUS } from '../src/constants/messages.js';
import logger from '../src/utils/logger.js';

export const OptimizePrompt = async (req, res) => {
    try {
        const { promptText } = req.body;
        if (!promptText) throw new Error('Prompt text is required');
        
        const optimized = await aiLayerService.optimizePrompt(promptText);
        return sendSuccess(res, { optimized }, 'Prompt optimized successfully.');
    } catch (err) {
        logger.error(`OptimizePrompt Error: ${err.message}`);
        return sendError(res, 'Failed to optimize prompt.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const GenerateMetadata = async (req, res) => {
    try {
        const { promptText } = req.body;
        if (!promptText) throw new Error('Prompt text is required');
        
        const metadata = await aiLayerService.generateMetadata(promptText);
        return sendSuccess(res, metadata, 'Metadata generated successfully.');
    } catch (err) {
        logger.error(`GenerateMetadata Error: ${err.message}`);
        return sendError(res, 'Failed to generate metadata.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const AnalyzePromptQuality = async (req, res) => {
    try {
        const { promptText } = req.body;
        if (!promptText) throw new Error('Prompt text is required');
        
        const insights = await aiLayerService.analyzeQuality(promptText);
        return sendSuccess(res, { insights }, 'Prompt quality analyzed.');
    } catch (err) {
        logger.error(`AnalyzePromptQuality Error: ${err.message}`);
        return sendError(res, 'Failed to analyze prompt.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};
