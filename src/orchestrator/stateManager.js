import fs from 'fs';
import config from './config.js';
import logger from './logger.js';

class StateManager {
    constructor() {
        this.statePath = config.paths.agentState;
        this.progressPath = config.paths.progress;
    }

    loadState() {
        if (!fs.existsSync(this.statePath)) {
            return this.getDefaultState();
        }
        try {
            return JSON.parse(fs.readFileSync(this.statePath, 'utf8'));
        } catch (e) {
            logger.warn(`Failed to parse ${this.statePath}, resetting state.`);
            return this.getDefaultState();
        }
    }

    saveState(state) {
        fs.writeFileSync(this.statePath, JSON.stringify(state, null, 4), 'utf8');
    }

    loadProgress() {
        if (!fs.existsSync(this.progressPath)) {
            return this.getDefaultProgress();
        }
        try {
            return JSON.parse(fs.readFileSync(this.progressPath, 'utf8'));
        } catch (e) {
            return this.getDefaultProgress();
        }
    }

    saveProgress(progress) {
        fs.writeFileSync(this.progressPath, JSON.stringify(progress, null, 4), 'utf8');
    }

    getDefaultState() {
        return {
            currentTask: null,
            attempt: 0,
            status: 'idle',
            completedTasks: []
        };
    }

    getDefaultProgress() {
        return {
            completed: 0,
            remaining: 0,
            percentage: 0
        };
    }
}

export default new StateManager();
