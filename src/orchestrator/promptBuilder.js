import fs from 'fs';
import path from 'path';
import config from './config.js';

class PromptBuilder {
    buildPrompt({ currentTask, previousTaskResult, logs, mode = 'generator', proposedChanges = null, fileContents = null }) {
        const schema = `{
    "status": "completed" | "failed" | "needs_human" | "read_files",
    "task": "Task description",
    "reason": "Explanation",
    "readFiles": ["array of absolute or relative file paths to read. Use this if you need to inspect code before modifying it."],
    "fileEdits": [
        {
            "path": "src/config/index.js",
            "search": "exact string to replace",
            "replace": "new string to insert",
            "instruction": "Brief description of change"
        }
    ],
    "nextRecommendation": "String",
    "needsHuman": boolean
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
        if (fileContents) {
            prompt += `=== FILE CONTENTS YOU REQUESTED ===\n${fileContents}\n==================================\n\n`;
        }

        if (mode === 'generator') {
            if (logs) {
                prompt += `PREVIOUS EXECUTION LOGS (Fix these errors):\n${logs}\n\n`;
            } else if (previousTaskResult) {
                prompt += `PREVIOUS TASK RESULT:\n${previousTaskResult}\n\n`;
            }
            prompt += `INSTRUCTIONS:
1. First, check if you have all the necessary code context to make exact search/replace diffs. If not, set status="read_files" and list the files in "readFiles". DO NOT attempt to write "fileEdits" if you are guessing the file contents!
2. If you do have enough context, make changes to fulfill the task. Use minimal tokens by only providing search/replace blocks for the exact lines that need changing. For new files, set 'search' to empty string.
3. You must output your final response STRICTLY in JSON format matching this schema:
${schema}
Return ONLY valid JSON. No markdown formatting (\`\`\`json) or other text.
`;
        } else if (mode === 'evaluator') {
            prompt += `PROPOSED CHANGES FROM MULTIPLE GENERATORS:\n${JSON.stringify(proposedChanges, null, 2)}\n\n`;
            prompt += `INSTRUCTIONS:
1. You are the Evaluator. You have received proposed file edits from multiple competing AI models.
2. Review the proposed changes for hallucinations, syntax errors, missing imports, or architectural flaws.
3. Select the best proposal. If one is perfect, return status="completed" and output the EXACT SAME fileEdits from the winning proposal.
4. If all are flawed, return status="failed", provide a detailed reason, and omit fileEdits so the generators can try again.
5. Output STRICTLY in JSON format matching the schema:
${schema}
Return ONLY valid JSON.
`;
        }

        return prompt;
    }
}

export default new PromptBuilder();
