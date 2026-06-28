import { exec } from 'child_process';
import config from './config.js';
import logger from './logger.js';

class QualityGates {
    runCommand(command) {
        return new Promise((resolve) => {
            logger.system(`Running quality gate: ${command}`);
            exec(command, { cwd: process.cwd() }, (error, stdout, stderr) => {
                if (error) {
                    logger.warn(`Quality gate failed: ${command}`);
                    resolve({ passed: false, logs: stdout + '\n' + stderr });
                } else {
                    logger.success(`Quality gate passed: ${command}`);
                    resolve({ passed: true, logs: stdout });
                }
            });
        });
    }

    async runAll() {
        const results = [];
        for (const [name, command] of Object.entries(config.commands)) {
            if (!command) continue;
            
            const result = await this.runCommand(command);
            results.push({ name, ...result });
            if (!result.passed) {
                // Return immediately on first failure
                return { passed: false, failedAt: name, logs: result.logs };
            }
        }
        return { passed: true };
    }
}

export default new QualityGates();
