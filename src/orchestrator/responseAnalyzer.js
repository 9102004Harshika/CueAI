import logger from './logger.js';

class ResponseAnalyzer {
    parse(responseText) {
        try {
            // Strip any markdown code blocks if the LLM leaked them
            let cleaned = responseText.trim();
            if (cleaned.startsWith('```json')) cleaned = cleaned.replace(/^```json\n?/, '');
            else if (cleaned.startsWith('```')) cleaned = cleaned.replace(/^```\n?/, '');
            if (cleaned.endsWith('```')) cleaned = cleaned.replace(/\n?```$/, '');
            cleaned = cleaned.trim();
            
            const data = JSON.parse(cleaned);
            return data;
        } catch (error) {
            logger.error('Failed to parse LLM response as JSON');
            logger.debug(responseText);
            return {
                status: 'failed',
                reason: 'Invalid JSON response from LLM: ' + error.message,
                needsHuman: true
            };
        }
    }
}

export default new ResponseAnalyzer();
