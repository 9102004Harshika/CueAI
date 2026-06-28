import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

// Load .env if present
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const loadProjectConfig = () => {
    const configPath = path.resolve(process.cwd(), 'orchestrator.config.json');
    if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
    return {};
};

const projectConfig = loadProjectConfig();

const config = {
    llmProvider: projectConfig.llmProvider || process.env.LLM_PROVIDER || 'gemini',
    apiKey: process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY,
    model: projectConfig.model || process.env.LLM_MODEL || 'gemini-2.5-flash',
    commands: {
        build: projectConfig.commands?.build || 'node --check index.js',
        test: projectConfig.commands?.test || '',
        lint: projectConfig.commands?.lint || ''
    },
    paths: {
        taskFile: path.resolve(process.cwd(), projectConfig.paths?.taskFile || 'task.md'),
        agentState: path.resolve(process.cwd(), projectConfig.paths?.agentState || 'agent-state.json'),
        progress: path.resolve(process.cwd(), projectConfig.paths?.progress || 'progress.json')
    }
};

export default config;
