import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  description: { type: String, required: true, trim: true },
  image: { type: String } // 1 image path
}, { timestamps: true });

export default mongoose.model('Item', itemSchema);


