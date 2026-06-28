import { PlaygroundSessionModel as PlaygroundSession } from '../../models/PlaygroundSession.js';
import AIProviderFactory from './AIProviderFactory.js';
import logger from '../utils/logger.js';

class ExecutionService {
    
    /**
     * Step 4: Prompt Variables Resolution
     */
    resolveVariables(prompt, variables) {
        let finalPrompt = prompt;
        for (const [key, value] of Object.entries(variables)) {
            const regex = new RegExp(`{{${key}}}`, 'g');
            finalPrompt = finalPrompt.replace(regex, value);
        }
        return finalPrompt;
    }

    /**
     * Step 3, 5, 6: The Execution Pipeline
     */
    async executeSession(sessionId, onChunk) {
        const session = await PlaygroundSession.findById(sessionId);
        if (!session) throw new Error('Session not found');

        try {
            // State Update
            session.executionStatus = 'RUNNING';
            await session.save();

            // Step 4 & 13: Pipeline preparation
            session.finalPrompt = this.resolveVariables(session.inputPrompt, session.variables || {});
            
            // Step 2: Provider Abstraction
            const provider = AIProviderFactory.getProvider(session.provider);
            const startTime = Date.now();

            // Step 6: Stream execution
            const result = await provider.executeStream(session.finalPrompt, {
                model: session.model,
                temperature: session.temperature,
                maxTokens: session.maxTokens
            }, onChunk);

            // Step 12: Logging & Completion
            session.executionTimeMs = Date.now() - startTime;
            session.generatedOutput = result.fullText;
            session.tokenUsage = result.usage;
            session.executionStatus = 'COMPLETED';
            
            await session.save();
            return session;

        } catch (err) {
            session.executionStatus = 'FAILED';
            session.errorMessage = err.message;
            await session.save();
            logger.error(`Execution Failed: ${err.message}`);
            throw err;
        }
    }

    async createSession(userId, data) {
        return await PlaygroundSession.create({
            userId,
            ...data
        });
    }
}

export default new ExecutionService();
