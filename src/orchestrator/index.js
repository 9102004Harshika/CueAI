import logger from './logger.js';
import runner from './runner.js';

export async function startOrchestrator() {
    try {
        await runner.start();
    } catch (error) {
        logger.error(`Orchestrator crashed: ${error.message}`);
    }
}
