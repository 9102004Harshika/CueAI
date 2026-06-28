import BaseProvider from './BaseProvider.js';

export default class MockProvider extends BaseProvider {
    constructor(apiKey) {
        super(apiKey);
    }

    async executeStream(finalPrompt, config, onChunk) {
        // Mock streaming response for development
        const response = `This is a mock response from MockProvider for: ${finalPrompt}`;
        const words = response.split(' ');
        
        for (const word of words) {
            await new Promise(resolve => setTimeout(resolve, 100)); // Simulate latency
            onChunk(word + ' ');
        }
        
        return {
            fullText: response,
            usage: { promptTokens: 10, completionTokens: words.length, totalTokens: 10 + words.length }
        };
    }
}
