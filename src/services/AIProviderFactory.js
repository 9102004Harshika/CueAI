import MockProvider from './providers/MockProvider.js';
// import GeminiProvider from './providers/GeminiProvider.js';

export default class AIProviderFactory {
    static getProvider(providerName) {
        switch(providerName.toLowerCase()) {
            case 'mock':
                return new MockProvider('mock-key');
            // case 'gemini':
            //     return new GeminiProvider(process.env.GEMINI_API_KEY);
            default:
                throw new Error(`Provider ${providerName} is not supported.`);
        }
    }
}
