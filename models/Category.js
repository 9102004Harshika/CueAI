import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String, default: '' },
    icon: { type: String, default: '' }, // URL or icon identifier
    parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null },
    isFeatured: { type: Boolean, default: false },
    visibility: { type: String, enum: ['Visible', 'Hidden'], default: 'Visible' },
    order: { type: Number, default: 0 }
}, { timestamps: true });

// Auto-generate slug
CategorySchema.pre('validate', function(next) {
    if (this.isModified('name') && !this.slug) {
        this.slug = this.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    }
    next();
});

export const CategoryModel = mongoose.model('Category', CategorySchema);
