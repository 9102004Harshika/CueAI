import logger from './logger.js';
import taskParser from './taskParser.js';
import stateManager from './stateManager.js';
import promptBuilder from './promptBuilder.js';
import llmProvider from './llm/index.js';
import responseAnalyzer from './responseAnalyzer.js';
import qualityGates from './qualityGates.js';
import gitManager from './gitManager.js';
import fs from 'fs';
import path from 'path';

class Runner {
    constructor() {
        this.maxAttempts = 3;
        // The pool of models to compete against each other
        this.generatorModels = [
            'google/gemini-2.5-flash',
            'anthropic/claude-3-haiku',
            'meta-llama/llama-3-8b-instruct'
        ];
        this.evaluatorModel = 'anthropic/claude-3-haiku';
    }

    async applyFileEdits(edits) {
        if (!edits || !Array.isArray(edits)) return;
        for (const edit of edits) {
            const filePath = path.resolve(process.cwd(), edit.path);
            let content = '';
            
            if (fs.existsSync(filePath)) {
                content = fs.readFileSync(filePath, 'utf8');
            } else if (edit.search) {
                throw new Error(`File ${edit.path} does not exist but search string provided.`);
            }

            if (edit.search) {
                if (!content.includes(edit.search)) {
                    throw new Error(`Search string not found in ${edit.path}:\n${edit.search}`);
                }
                content = content.replace(edit.search, edit.replace);
            } else {
                content = edit.replace; // new file or total overwrite
            }

            fs.mkdirSync(path.dirname(filePath), { recursive: true });
            fs.writeFileSync(filePath, content, 'utf8');
            logger.info(`Applied edit to ${edit.path}`);
        }
    }

    getFileContents(readFiles) {
        if (!readFiles || !Array.isArray(readFiles)) return null;
        let contentStr = '';
        for (const file of readFiles) {
            const filePath = path.resolve(process.cwd(), file);
            if (fs.existsSync(filePath)) {
                if (fs.statSync(filePath).isDirectory()) {
                    contentStr += `\n--- ${file} ---\n[IS A DIRECTORY. PLEASE SPECIFY A FILE.]\n`;
                } else {
                    contentStr += `\n--- ${file} ---\n${fs.readFileSync(filePath, 'utf8')}\n`;
                }
            } else {
                contentStr += `\n--- ${file} ---\n[FILE NOT FOUND]\n`;
            }
        }
        return contentStr;
    }

    async start() {
        logger.info('Starting V3 Autonomous Multi-Model Arena...');

        let state = stateManager.loadState();
        if (state.status === 'completed') {
            logger.info('All tasks are marked as completed.');
            return;
        }

        let fileContents = null;

        while (true) {
            const task = taskParser.getFirstUncheckedTask();
            
            if (!task) {
                logger.success('No pending tasks found. We are done!');
                state.status = 'completed';
                stateManager.saveState(state);
                break;
            }

            if (state.currentTask !== task.description) {
                state.currentTask = task.description;
                state.attempt = 1;
                state.status = 'running';
                stateManager.saveState(state);
                fileContents = null; // reset read files for new task
            }

            logger.info(`Processing Task: ${task.description} (Attempt ${state.attempt}/${this.maxAttempts})`);

            if (state.attempt > this.maxAttempts) {
                logger.error(`Failed to complete task '${task.description}' after ${this.maxAttempts} attempts. Halting for human review.`);
                break;
            }

            // Build Generator Prompt
            const genPrompt = promptBuilder.buildPrompt({
                currentTask: task,
                logs: state.lastErrorLogs,
                previousTaskResult: state.lastTaskResult,
                mode: 'generator',
                fileContents: fileContents
            });

            // 1. GENERATORS ARENA (Parallel)
            logger.agent(`Arena started: ${this.generatorModels.join(', ')} are competing...`);
            
            const generatorPromises = this.generatorModels.map(async (modelName) => {
                try {
                    const text = await llmProvider.generate(genPrompt, modelName);
                    return { model: modelName, response: responseAnalyzer.parse(text), error: null };
                } catch (err) {
                    return { model: modelName, response: null, error: err.message };
                }
            });

            const results = await Promise.all(generatorPromises);
            
            // Check if ANY model requested to read files
            const readRequests = results.filter(r => r.response && r.response.status === 'read_files' && r.response.readFiles);
            if (readRequests.length > 0) {
                logger.info(`Models requested to read files. Fetching...`);
                // Aggregate all unique files requested
                const allFiles = new Set();
                readRequests.forEach(r => r.response.readFiles.forEach(f => allFiles.add(f)));
                fileContents = this.getFileContents(Array.from(allFiles));
                // Do not increment attempt, just loop immediately to provide files
                continue;
            }

            const validProposals = results.filter(r => r.response && r.response.status !== 'failed' && r.response.fileEdits);

            if (validProposals.length === 0) {
                logger.error(`All generators failed or none provided file edits.`);
                state.lastErrorLogs = "All models failed to generate valid code. " + results.map(r => r.error || r.response?.reason).join(' | ');
                state.attempt++;
                stateManager.saveState(state);
                continue;
            }

            // 2. EVALUATOR
            logger.agent(`Evaluator (${this.evaluatorModel}) is verifying ${validProposals.length} proposals...`);
            
            const proposalsJson = validProposals.map(r => ({
                model: r.model,
                reason: r.response.reason,
                fileEdits: r.response.fileEdits
            }));

            const revPrompt = promptBuilder.buildPrompt({
                currentTask: task,
                mode: 'evaluator',
                proposedChanges: proposalsJson
            });

            let revResponseText;
            try {
                revResponseText = await llmProvider.generate(revPrompt, this.evaluatorModel);
            } catch (err) {
                logger.error(`Evaluator LLM Error: ${err.message}. Retrying...`);
                state.attempt++;
                stateManager.saveState(state);
                continue;
            }

            const revResponse = responseAnalyzer.parse(revResponseText);

            if (revResponse.status === 'failed') {
                logger.warn(`Evaluator rejected all proposals. Reason: ${revResponse.reason}`);
                state.lastErrorLogs = `EVALUATOR REJECTED ALL PROPOSALS: ${revResponse.reason}`;
                state.attempt++;
                stateManager.saveState(state);
                continue;
            }

            logger.success(`Evaluator selected a winning proposal!`);

            // Apply file edits
            try {
                await this.applyFileEdits(revResponse.fileEdits);
            } catch (err) {
                logger.error(`Failed to apply file edits: ${err.message}`);
                state.lastErrorLogs = `File Edit Error: ${err.message}`;
                state.attempt++;
                stateManager.saveState(state);
                continue;
            }

            // Verify with Quality Gates
            const gateResult = await qualityGates.runAll();
            
            if (!gateResult.passed) {
                logger.error(`Quality Gates Failed at ${gateResult.failedAt}. Sending logs back to AI...`);
                state.lastErrorLogs = gateResult.logs;
                state.attempt++;
                stateManager.saveState(state);
                continue; 
            }

            // Everything passed
            logger.success(`Task '${task.description}' completed successfully!`);
            
            // Mark task done
            taskParser.markTaskDone(task.description);
            
            // Commit to Git
            await gitManager.commitProgress(task.description);

            // Update state
            state.completedTasks.push(task.description);
            state.currentTask = null;
            state.attempt = 0;
            state.lastErrorLogs = null;
            state.lastTaskResult = JSON.stringify(revResponse);
            stateManager.saveState(state);
            fileContents = null; // Reset
        }
    }
}

export default new Runner();
