import simpleGit from 'simple-git';
import logger from './logger.js';
import fs from 'fs';

class GitManager {
    constructor() {
        this.git = simpleGit(process.cwd());
    }

    async commitProgress(taskDescription) {
        try {
            // Check if git is initialized
            const isRepo = await this.git.checkIsRepo();
            if (!isRepo) {
                logger.warn('Git is not initialized in this directory. Skipping commit.');
                return;
            }

            logger.system('Committing progress to Git...');
            await this.git.add('./*');
            const commitMsg = `[Auto] Completed Task: ${taskDescription}`;
            
            const status = await this.git.status();
            if (status.staged.length > 0 || status.modified.length > 0 || status.not_added.length > 0) {
                await this.git.commit(commitMsg);
                logger.success(`Committed: ${commitMsg}`);
            } else {
                logger.info('No changes to commit.');
            }
            
            // Optional: push
            // await this.git.push();
        } catch (error) {
            logger.error(`Git commit failed: ${error.message}`);
        }
    }
}

export default new GitManager();
