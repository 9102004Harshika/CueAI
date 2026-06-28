import logger from './logger.js';
import taskParser from './taskParser.js';
import stateManager from './stateManager.js';
import promptBuilder from './promptBuilder.js';
import llmProvider from './llm/index.js';
import responseAnalyzer from './responseAnalyzer.js';
import qualityGates from './qualityGates.js';
import gitManager from './gitManager.js';

class Runner {
    constructor() {
        this.maxAttempts = 3;
    }

    async start() {
        logger.info('Starting Autonomous Orchestrator...');

        let state = stateManager.loadState();
        if (state.status === 'completed') {
            logger.info('All tasks are marked as completed.');
            return;
        }

        while (true) {
            const task = taskParser.getFirstUncheckedTask();
            
            if (!task) {
                logger.success('No pending tasks found. We are done!');
                state.status = 'completed';
                stateManager.saveState(state);
                break;
            }

            // Update state
            if (state.currentTask !== task.description) {
                state.currentTask = task.description;
                state.attempt = 1;
                state.status = 'running';
                stateManager.saveState(state);
            }

            logger.info(`Processing Task: ${task.description} (Attempt ${state.attempt}/${this.maxAttempts})`);

            if (state.attempt > this.maxAttempts) {
                logger.error(`Failed to complete task '${task.description}' after ${this.maxAttempts} attempts. Halting for human review.`);
                break;
            }

            // Build Prompt
            const prompt = promptBuilder.buildPrompt({
                currentTask: task,
                logs: state.lastErrorLogs,
                previousTaskResult: state.lastTaskResult
            });

            // Run AI
            logger.agent('Thinking...');
            let aiResponseText;
            try {
                aiResponseText = await llmProvider.generate(prompt);
            } catch (err) {
                logger.error(`LLM Error: ${err.message}. Retrying...`);
                state.attempt++;
                stateManager.saveState(state);
                continue;
            }
            
            logger.agent('Received response.');
            const parsedResponse = responseAnalyzer.parse(aiResponseText);
            
            logger.debug(`Parsed AI Response: ${JSON.stringify(parsedResponse, null, 2)}`);

            if (parsedResponse.status === 'failed' || parsedResponse.needsHuman) {
                logger.error(`AI indicated failure or needs human. Reason: ${parsedResponse.reason}`);
                state.lastErrorLogs = parsedResponse.reason;
                state.attempt++;
                stateManager.saveState(state);
                continue; // Retry loop
            }

            // AI thinks it's done. Now we verify with Quality Gates.
            const gateResult = await qualityGates.runAll();
            
            if (!gateResult.passed) {
                logger.error(`Quality Gates Failed at ${gateResult.failedAt}. Sending logs back to AI...`);
                state.lastErrorLogs = gateResult.logs;
                state.attempt++;
                stateManager.saveState(state);
                continue; // Retry loop
            }

            // Everything passed!
            logger.success(`Task '${task.description}' completed successfully!`);
            
            // Mark task done
            taskParser.markTaskDone(task.description);
            
            // Commit to Git
            await gitManager.commitProgress(task.description);

            // Update state for next task
            state.completedTasks.push(task.description);
            state.currentTask = null;
            state.attempt = 0;
            state.lastErrorLogs = null;
            state.lastTaskResult = JSON.stringify(parsedResponse);
            stateManager.saveState(state);
        }
    }
}

export default new Runner();
