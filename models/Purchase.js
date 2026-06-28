import mongoose from 'mongoose';

const PurchaseSchema = new mongoose.Schema({
    buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true, index: true },
    promptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prompt', required: true, index: true },
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    pricePaid: { type: Number, required: true },
    currency: { type: String, default: 'USD' },
    status: { type: String, enum: ['PENDING', 'COMPLETED', 'REFUNDED', 'FAILED'], default: 'PENDING' },
    paymentProviderId: { type: String, default: '' }, // e.g. Stripe Charge ID
    invoiceReady: { type: Boolean, default: false }
}, { timestamps: true });

export const PurchaseModel = mongoose.model('Purchase', PurchaseSchema);
