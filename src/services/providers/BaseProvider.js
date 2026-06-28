/**
 * Step 2: AI Provider Abstraction Interface
 */
export default class BaseProvider {
    constructor(apiKey) {
        if (new.target === BaseProvider) {
            throw new TypeError("Cannot construct BaseProvider instances directly");
        }
        this.apiKey = apiKey;
    }

    /**
     * Executes the prompt and returns a stream or Promise.
     * Must be implemented by concrete classes.
     */
    async executeStream(finalPrompt, config) {
        throw new Error('executeStream() must be implemented.');
    }
}
