import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  brand: { type: String, required: true, trim: true },
  image: { type: String } // 1 image path
}, { timestamps: true });

export default mongoose.model('Category', categorySchema);