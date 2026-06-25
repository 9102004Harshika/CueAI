import { SignupModel as User } from '../models/Signup.js';
import crypto from 'crypto';

export const generateApiKey = async (req, res) => {
    try {
        const { username } = req.params;
        const { name } = req.body;
        
        const user = await User.findOne({ fname: username }); // fname is used as username currently
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Generate secure key
        const rawKey = `cue_${process.env.NODE_ENV === 'production' ? 'prod' : 'test'}_${crypto.randomBytes(24).toString('hex')}`;
        
        // Hash for storage
        const keyHash = crypto.createHash('sha256').update(rawKey).digest('hex');

        user.apiTokens.push({
            name: name || 'Default Key',
            keyHash,
            createdAt: new Date()
        });
        
        await user.save();

        // Only return rawKey once
        res.status(201).json({ success: true, key: rawKey, name: name || 'Default Key' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const executePrompt = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'Missing or invalid authorization header' });
        }

        const rawKey = authHeader.split(' ')[1];
        const keyHash = crypto.createHash('sha256').update(rawKey).digest('hex');

        // Authenticate
        const user = await User.findOne({ 'apiTokens.keyHash': keyHash });
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid API Key' });
        }

        const { prompt, model, temperature } = req.body;

        // Mock Execution Gateway (Would integrate with actual LLM here)
        const mockResponse = {
            id: `gen_${crypto.randomBytes(8).toString('hex')}`,
            object: 'generation',
            created: Date.now(),
            model: model || 'gpt-4o',
            choices: [
                {
                    index: 0,
                    message: {
                        role: "assistant",
                        content: `Simulated response for: "${prompt}" using ${model} at temp ${temperature}`
                    },
                    finish_reason: "stop"
                }
            ],
            usage: {
                prompt_tokens: 42,
                completion_tokens: 128,
                total_tokens: 170
            }
        };

        res.status(200).json(mockResponse);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
