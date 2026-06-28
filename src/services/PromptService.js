import { PromptModel as Prompt } from '../../models/Prompt.js';
import { PromptVersionModel as PromptVersion } from '../../models/PromptVersion.js';
import mongoose from 'mongoose';

class PromptService {
    /**
     * Step 7: Draft System (Create & Update Drafts)
     */
    async createDraft(creatorId, promptData) {
        const newPrompt = new Prompt({
            ...promptData,
            userId: creatorId,
            status: 'DRAFT'
        });
        
        await newPrompt.save();
        return newPrompt;
    }

    async updatePrompt(promptId, creatorId, updateData, newVersionLog = null) {
        const prompt = await Prompt.findOne({ _id: promptId, userId: creatorId });
        if (!prompt) throw new Error('Prompt not found or access denied.');

        // Step 8: Prompt Versioning
        if (newVersionLog) {
            // Save current state to version history before applying new updates
            await PromptVersion.create({
                promptId: prompt._id,
                versionNumber: prompt.version,
                promptContent: prompt.promptContent || 'legacy-buffer',
                changeLog: newVersionLog,
                updatedBy: creatorId
            });

            // Increment version
            prompt.version += 1;
        }

        // Apply updates
        Object.assign(prompt, updateData);
        await prompt.save();
        return prompt;
    }

    async publishPrompt(promptId, creatorId) {
        return await Prompt.findOneAndUpdate(
            { _id: promptId, userId: creatorId },
            { status: 'PUBLISHED' },
            { new: true }
        );
    }

    async archivePrompt(promptId, creatorId) {
        return await Prompt.findOneAndUpdate(
            { _id: promptId, userId: creatorId },
            { status: 'ARCHIVED' },
            { new: true }
        );
    }

    async softDeletePrompt(promptId, creatorId) {
        return await Prompt.findOneAndUpdate(
            { _id: promptId, userId: creatorId },
            { deleted: true },
            { new: true }
        );
    }

    /**
     * Step 9: Cloudinary Media Abstraction
     * In a real implementation, this uploads the buffer to Cloudinary and returns a URL.
     */
    async uploadMediaToCloud(fileBuffer, mimetype) {
        // Mock Cloudinary upload abstraction
        // return await cloudinary.uploader.upload_stream(...)
        return `https://res.cloudinary.com/demo/image/upload/mock-url-${Date.now()}`;
    }
}

export default new PromptService();
