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
    if (!item) return res.status(404).json({ mesage: "Note not found!" });
    res.json(note);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createItem(req, res) {
  try {
    const { title, content } = req.body;
    const item = new Item({ title, content });
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function updateItem(req, res) {
  try {
    const { title, content } = req.body;
    await Item.findByIdAndUpdate(req.params.id, { title, content }),
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
    const delectedItem = await Note.findByIdAndDelete(req.params.id);
    if (!delectedItem)
      return res.status(404).json({ message: "Item not found" });
    res.status(200).json({ message: "Item delected" });
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Internal error" });
  }
}
