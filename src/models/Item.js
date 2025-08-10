import mongoose from "mongoose";

// 1- create a schema
//2- model based off of that schema

const itemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    details: { type: String, required: true },
  },
  {
    timestamps: true,
  } //creation
);

const Item = mongoose.model("Item", itemSchema);

export default Item;
