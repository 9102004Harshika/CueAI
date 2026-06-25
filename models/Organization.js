import mongoose from 'mongoose';

const organizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    members: [{
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        role: {
            type: String,
            enum: ['OWNER', 'ADMIN', 'EDITOR', 'VIEWER'],
            default: 'VIEWER'
        },
        status: {
            type: String,
            enum: ['ACTIVE', 'PENDING'],
            default: 'PENDING'
        }
    }],
    billingEmail: {
        type: String,
        required: false,
    },
    plan: {
        type: String,
        enum: ['HOBBY', 'PRO', 'ENTERPRISE'],
        default: 'HOBBY'
    }
}, { timestamps: true });

const Organization = mongoose.model('Organization', organizationSchema);
export default Organization;
