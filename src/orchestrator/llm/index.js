import config from '../config.js';
import gemini from './gemini.js';

class LLMProvider {
    async generate(prompt, model = null) {
        if (!config.apiKey) {
            throw new Error("No API key configured for LLM");
        }
        
        switch (config.llmProvider.toLowerCase()) {
            case 'gemini':
                return await gemini.generate(prompt, model);
            default:
                throw new Error(`Unsupported LLM provider: ${config.llmProvider}`);
        }
    }
}

export default new LLMProvider();
