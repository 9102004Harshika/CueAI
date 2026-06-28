import { startOrchestrator } from './src/orchestrator/index.js';

console.log("Starting CueAI Orchestrator...");
startOrchestrator().catch(console.error);
