import mongoose from 'mongoose';

const PromptVersionSchema = new mongoose.Schema({
    promptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prompt', required: true, index: true },
    versionNumber: { type: Number, required: true },
    promptContent: { type: String, required: true },
    changeLog: { type: String, default: '' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true }
}, { timestamps: true });

export const PromptVersionModel = mongoose.model('PromptVersion', PromptVersionSchema);
