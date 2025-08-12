/** @format */

import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    image1: { type: ImageData },
    image2: { type: ImageData },
    image3: { type: ImageData },
    image4: { type: ImageData },
    image5: { type: ImageData },
    image6: { type: ImageData },
    image7: { type: ImageData },
    image8: { type: ImageData },
    image9: { type: ImageData },
    image10: { type: ImageData },
    image11: { type: ImageData },
    image12: { type: ImageData },
    image13: { type: ImageData },
    image14: { type: ImageData },
    image15: { type: ImageData },
    image16: { type: ImageData },
    image17: { type: ImageData },
    image18: { type: ImageData },
    image19: { type: ImageData },
    image20: { type: ImageData },
    name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
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
  },
  {
    timestamps: true,
  }, //creation
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
