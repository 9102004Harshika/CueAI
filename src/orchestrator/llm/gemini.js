import axios from 'axios';
import config from '../config.js';
import logger from '../logger.js';

class OpenRouterProvider {
    async generate(prompt) {
        // For OpenRouter, models typically look like "google/gemini-2.5-flash"
        const modelName = config.model.includes('/') ? config.model : `google/${config.model}`;
        logger.system(`Calling OpenRouter API (${modelName})...`);
        
        try {
            const response = await axios.post(
                'https://openrouter.ai/api/v1/chat/completions',
                {
                    model: modelName,
                    messages: [{ role: 'user', content: prompt }],
                    max_tokens: 8000
                },
                {
                    headers: {
                        'Authorization': `Bearer ${config.apiKey}`,
                        'HTTP-Referer': 'http://localhost:5000',
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data.choices[0].message.content;
        } catch (error) {
            logger.error(`OpenRouter API Error: ${error.message}`);
            if (error.response) {
                logger.error(`Details: ${JSON.stringify(error.response.data)}`);
            }
            throw error;
        }
    }
}

export default new OpenRouterProvider();
