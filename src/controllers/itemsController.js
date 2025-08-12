/** @format */

import Item from "../models/Item.js";

export async function getAllDetails(_, res) {
  try {
    const items = await Item.find().sort({ createdAt: -1 }); // -1 will sort in desc. order(newest first)
    res.status(200).json(items);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getItemById(req, res) {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Note not found!" });
    res.json(item);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createItem(req, res) {
  try {
    const {
      name,
      price,
      description,
      license,
      enginePower,
      fuelType,
      transmission,
      seat,
      fuelEconomy,
      engineType,
      year,
      color,
      specialMark,
    } = req.body;
    const item = new Item({
      name,
      price,
      description,
      license,
      enginePower,
      fuelType,
      transmission,
      seat,
      fuelEconomy,
      engineType,
      year,
      color,
      specialMark,
    });
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function updateItem(req, res) {
  try {
    const {
      name,
      price,
      description,
      license,
      enginePower,
      fuelType,
      transmission,
      seat,
      fuelEconomy,
      engineType,
      year,
      color,
      specialMark,
    } = req.body;
    await Item.findByIdAndUpdate(req.params.id, {
      name,
      price,
      description,
      license,
      enginePower,
      fuelType,
      transmission,
      seat,
      fuelEconomy,
      engineType,
      year,
      color,
      specialMark,
    }),
      {
        new: true,
      };
    if (!updateItem) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(updateItem);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function deleteItem(req, res) {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: "Item not found" });
    res.status(200).json({ message: "Item deleted" });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function createImage(req, res) {
  try {
    const {
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
      image19,
      image20
    } = req.body;
    const item = new Item({
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
      image19,
      image20
    });
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function updateImage(req, res) {
  try {
    const {
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
      image19,
      image20
    } = req.body;
    await Item.findByIdAndUpdate(req.params.id, {
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
      image19,
      image20
    }),
      {
        new: true,
      };
    if (!updateImage) return res.status(404).json({ message: "Image not found" });
    res.status(200).json(updateImage);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Internal error" });
  }
}