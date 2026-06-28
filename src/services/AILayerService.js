import AIProviderFactory from './AIProviderFactory.js';
import logger from '../utils/logger.js';

class AILayerService {
    
    /**
     * Get a non-streaming completion from the provider layer.
     * We default to the fastest/cheapest model for meta-tasks.
     */
    async _getAICompletion(systemPrompt, userPrompt) {
        // Step 21: Provider Abstraction Integration
        const provider = AIProviderFactory.getProvider(process.env.META_AI_PROVIDER || 'mock');
        
        let fullResponse = '';
        const onChunk = (chunk) => { fullResponse += chunk; };

        // We format it so the provider behaves correctly
        const finalPrompt = `${systemPrompt}\n\nUser Input:\n${userPrompt}`;
        
        await provider.executeStream(finalPrompt, {
            model: process.env.META_AI_MODEL || 'mock-model',
            temperature: 0.3,
            maxTokens: 1024
        }, onChunk);

        return fullResponse;
    }

    /**
     * Step 2: Prompt Optimizer
     */
    async optimizePrompt(rawPrompt) {
        const system = `You are an expert Prompt Engineer. Improve the structure, clarity, and constraints of the following prompt. Do not change the underlying intent. Return ONLY the optimized prompt text.`;
        return await this._getAICompletion(system, rawPrompt);
    }

    /**
     * Step 8, 9, 10, 16: Smart Metadata Generation (Tags, Desc, Title)
     */
    async generateMetadata(rawPrompt) {
        const system = `You are an AI Marketplace Assistant. Analyze the prompt and return a JSON object containing:
{
  "title": "A catchy marketplace title",
  "shortDescription": "1-2 sentences summarizing the prompt",
  "tags": ["tag1", "tag2", "tag3"],
  "category": "The best matching category",
  "difficulty": "Beginner|Intermediate|Advanced"
}
Return ONLY valid JSON.`;

        const response = await this._getAICompletion(system, rawPrompt);
        try {
            // Clean up potential markdown formatting from LLM
            const jsonStr = response.replace(/```json/g, '').replace(/```/g, '').trim();
            return JSON.parse(jsonStr);
        } catch (err) {
            logger.error(`Metadata parsing failed: ${err.message}`);
            throw new Error('Failed to parse AI metadata response.');
        }
    }

    /**
     * Step 11: Prompt Quality Insights
     */
    async analyzeQuality(rawPrompt) {
        const system = `You are a strict Prompt Engineering judge. Analyze the user's prompt. 
Provide 3 actionable bullet points on how they can improve it (e.g. 'Lacks constraints', 'Needs examples'). 
Keep it concise.`;
        
        return await this._getAICompletion(system, rawPrompt);
    }
}

export default new AILayerService();
