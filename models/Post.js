import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    type: {
        type: String,
        enum: ['IMAGE', 'CODE', 'TEXT'],
        required: true,
    },
    content: {
        image: String,
        description: String,
        filename: String,
        language: String,
        code: String,
    },
    metadata: {
        title: String,
        tag: String,
        price: Number,
        model: String,
    },
    linkedPromptId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prompt',
        required: false,
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: [{
        authorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        text: String,
        createdAt: { type: Date, default: Date.now }
    }],
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
export default Post;
