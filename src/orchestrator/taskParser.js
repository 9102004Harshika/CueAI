import fs from 'fs';
import config from './config.js';
import logger from './logger.js';

class TaskParser {
    constructor() {
        this.taskFilePath = config.paths.taskFile;
    }

    getTasks() {
        if (!fs.existsSync(this.taskFilePath)) {
            logger.warn(`Task file not found: ${this.taskFilePath}`);
            return [];
        }

        const content = fs.readFileSync(this.taskFilePath, 'utf8');
        const lines = content.split('\n');
        const tasks = [];

        for (const line of lines) {
            const trimmed = line.trim();
            // Match markdown checkboxes: - [ ] Task name or * [x] Task name
            const match = trimmed.match(/^[-*]\s+\[([ xX])\]\s+(.*)/);
            if (match) {
                const isChecked = match[1] === 'x' || match[1] === 'X';
                tasks.push({
                    description: match[2],
                    completed: isChecked,
                    rawLine: line
                });
            }
        }
        return tasks;
    }

    getFirstUncheckedTask() {
        const tasks = this.getTasks();
        return tasks.find(t => !t.completed) || null;
    }

    markTaskDone(taskDescription) {
        if (!fs.existsSync(this.taskFilePath)) return;

        let content = fs.readFileSync(this.taskFilePath, 'utf8');
        const lines = content.split('\n');
        let modified = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const match = line.match(/^([ \t]*[-*]\s+\[)[ ](\]\s+)(.*)/);
            if (match && match[3].trim() === taskDescription.trim()) {
                lines[i] = `${match[1]}x${match[2]}${match[3]}`;
                modified = true;
                break;
            }
        }

        if (modified) {
            fs.writeFileSync(this.taskFilePath, lines.join('\n'), 'utf8');
        }
    }
}

export default new TaskParser();
