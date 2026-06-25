import Post from '../models/Post.js';
import { SignupModel as User } from '../models/Signup.js';

export const createPost = async (req, res) => {
    try {
        const { authorId, type, content, metadata, linkedPromptId } = req.body;
        
        const post = new Post({
            authorId,
            type,
            content,
            metadata,
            linkedPromptId
        });
        
        await post.save();
        res.status(201).json({ success: true, post });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const getFeed = async (req, res) => {
    try {
        // Fetch posts and populate author details
        const posts = await Post.find()
            .sort({ createdAt: -1 })
            .populate('authorId', 'fname avatarUrl')
            .limit(50);
            
        res.status(200).json({ success: true, posts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const likePost = async (req, res) => {
    try {
        const { postId } = req.params;
        
        const post = await Post.findByIdAndUpdate(
            postId,
            { $inc: { likes: 1 } },
            { new: true }
        );
        
        if (!post) {
            return res.status(404).json({ success: false, message: 'Post not found' });
        }
        
        res.status(200).json({ success: true, post });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
