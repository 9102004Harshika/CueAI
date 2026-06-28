import mongoose from 'mongoose';

const PlaygroundSessionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true, index: true },
    promptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prompt', default: null, index: true },
    
    // Config (Step 11)
    provider: { type: String, required: true }, // 'Gemini', 'OpenRouter', 'Claude'
    model: { type: String, required: true }, // 'gemini-1.5-flash', 'gpt-4o'
    temperature: { type: Number, default: 0.7 },
    maxTokens: { type: Number, default: 2048 },
    topP: { type: Number, default: 1 },
    frequencyPenalty: { type: Number, default: 0 },
    presencePenalty: { type: Number, default: 0 },
    systemPrompt: { type: String, default: '' },
    
    // Prompt Pipeline (Step 8, 13)
    variables: { type: mongoose.Schema.Types.Mixed, default: {} }, // User inputs for {{vars}}
    inputPrompt: { type: String, required: true },
    optimizedPrompt: { type: String, default: '' },
    finalPrompt: { type: String, required: true }, // The exact resolved string sent to LLM
    
    // Output (Step 9)
    generatedOutput: { type: String, default: '' },
    
    // Status & Organization (Step 15, 16)
    executionStatus: { 
        type: String, 
        enum: ['PENDING', 'RUNNING', 'COMPLETED', 'FAILED', 'CANCELLED'], 
        default: 'PENDING' 
    },
    isFavorite: { type: Boolean, default: false },
    isPinned: { type: Boolean, default: false },
    sessionName: { type: String, default: 'Untitled Session' },
    
    // Logging / Metrics (Step 12, 18)
    executionTimeMs: { type: Number, default: 0 },
    tokenUsage: {
        promptTokens: { type: Number, default: 0 },
        completionTokens: { type: Number, default: 0 },
        totalTokens: { type: Number, default: 0 }
    },
    estimatedCost: { type: Number, default: 0 },
    errorMessage: { type: String, default: '' }
}, { timestamps: true });

// Optimize History Pagination (Step 23)
PlaygroundSessionSchema.index({ userId: 1, createdAt: -1 });

export const PlaygroundSessionModel = mongoose.model('PlaygroundSession', PlaygroundSessionSchema);
