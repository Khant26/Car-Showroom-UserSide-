import mongoose from 'mongoose';

const itemDetailsSchema = new mongoose.Schema({
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },

  // vehicle details
  license: { type: String, required: true },
  enginePower: { type: Number, required: true },
  fuelType: { type: String, required: true },
  transmission: { type: String, required: true },
  seat: { type: Number, required: true },
  fuelEconomy: { type: String, required: true },
  engineType: { type: String, required: true },
  year: { type: String, required: true },
  color: { type: String, required: true },
  specialMark: { type: String, required: true },

  images: [String] // up to 19 images
}, { timestamps: true });

export default mongoose.model('ItemDetail', itemDetailsSchema);


