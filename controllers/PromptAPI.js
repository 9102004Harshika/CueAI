import promptService from '../src/services/PromptService.js';
import { sendSuccess, sendError } from '../src/utils/responseHandler.js';
import { HTTP_STATUS } from '../src/constants/messages.js';
import logger from '../src/utils/logger.js';

export const CreatePromptDraft = async (req, res) => {
    try {
        const prompt = await promptService.createDraft(req.user._id, req.body);
        return sendSuccess(res, prompt, 'Draft created successfully.', HTTP_STATUS.CREATED);
    } catch (err) {
        logger.error(`CreatePromptDraft Error: ${err.message}`);
        return sendError(res, 'Failed to create draft.', HTTP_STATUS.INTERNAL_SERVER_ERROR);
    }
};

export const UpdatePrompt = async (req, res) => {
    try {
        const { id } = req.params;
        const prompt = await promptService.updatePrompt(id, req.user._id, req.body, req.body.changeLog);
        return sendSuccess(res, prompt, 'Prompt updated successfully.');
    } catch (err) {
        logger.error(`UpdatePrompt Error: ${err.message}`);
        return sendError(res, err.message, HTTP_STATUS.BAD_REQUEST);
    }
};

export const PublishPrompt = async (req, res) => {
    try {
        const { id } = req.params;
        const prompt = await promptService.publishPrompt(id, req.user._id);
        return sendSuccess(res, prompt, 'Prompt published successfully.');
    } catch (err) {
        logger.error(`PublishPrompt Error: ${err.message}`);
        return sendError(res, err.message, HTTP_STATUS.BAD_REQUEST);
    }
};

export const ArchivePrompt = async (req, res) => {
    try {
        const { id } = req.params;
        const prompt = await promptService.archivePrompt(id, req.user._id);
        return sendSuccess(res, prompt, 'Prompt archived successfully.');
    } catch (err) {
        logger.error(`ArchivePrompt Error: ${err.message}`);
        return sendError(res, err.message, HTTP_STATUS.BAD_REQUEST);
    }
};

export const SoftDeletePrompt = async (req, res) => {
    try {
        const { id } = req.params;
        const prompt = await promptService.softDeletePrompt(id, req.user._id);
        return sendSuccess(res, prompt, 'Prompt moved to trash.');
    } catch (err) {
        logger.error(`SoftDeletePrompt Error: ${err.message}`);
        return sendError(res, err.message, HTTP_STATUS.BAD_REQUEST);
    }
};
