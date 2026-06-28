import fs from 'fs';
import path from 'path';
import config from './config.js';

class PromptBuilder {
    buildPrompt({ currentTask, previousTaskResult, logs }) {
        const schema = `{
    "status": "completed" | "failed" | "needs_human",
    "task": "Task description",
    "filesModified": ["array of file paths"],
    "nextRecommendation": "String",
    "needsHuman": boolean,
    "reason": "Explanation"
}`;

        let prompt = `You are a Principal Software Architect and an autonomous software engineering orchestrator.
Your goal is to complete the current task.

PROJECT ARCHITECTURE & CONTEXT:
- Node.js Express Backend. No build step (run with node or nodemon).
- Main entry point: index.js
- Standard MVC-like structure (controllers, middleware, models).
- Code uses ES modules (import/export).
- All new features (like Centralized Config, Global Error Handling, etc.) must follow Clean Architecture and SOLID principles.

CURRENT TASK:
${currentTask.description}

`;
        if (logs) {
            prompt += `PREVIOUS EXECUTION LOGS (Fix these errors):\n${logs}\n\n`;
        } else if (previousTaskResult) {
            prompt += `PREVIOUS TASK RESULT:\n${previousTaskResult}\n\n`;
        }

        prompt += `INSTRUCTIONS:
1. Make changes to fulfill the task.
2. You must output your final response STRICTLY in JSON format matching this schema:
${schema}

Return ONLY valid JSON. No markdown formatting (\`\`\`json) or other text.
`;

        return prompt;
    }
}

export default new PromptBuilder();
