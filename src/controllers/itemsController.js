// /** @format */

// import Item from "../models/Item.js";
// import Details from "../models/details.js";

// export async function getAllDetails(_, res) {
//   try {
//     const items = await Item.find().sort({ createdAt: -1 }); // -1 will sort in desc. order(newest first)
//     res.status(200).json(items);
//   } catch (error) {
//     console.error("Error", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }

// export async function getAll(_, res) {
//   try {
//     const details = await Details.find().sort({ createdAt: -1 }).populate('itemId'); // -1 will sort in desc. order(newest first)
//     res.status(200).json(details);
//   } catch (error) {
//     console.error("Error", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }

// export async function getItemById(req, res) {
//   try {
//     const item = await Item.findById(req.params.id);
//     if (!item) return res.status(404).json({ message: "Note not found!" });
//     res.json(item);
//   } catch (error) {
//     console.error("Error", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }

// export async function createItem(req, res) {
//   try {
//     const {
//       name
//       // price,
//       // description,
//       // license,
//       // enginePower,
//       // fuelType,
//       // transmission,
//       // seat,
//       // fuelEconomy,
//       // engineType,
//       // year,
//       // color,
//       // specialMark,
//     } = req.body;
//     const item = new Item({
//       name
//       // price,
//       // description,
//       // license,
//       // enginePower,
//       // fuelType,
//       // transmission,
//       // seat,
//       // fuelEconomy,
//       // engineType,
//       // year,
//       // color,
//       // specialMark,
//     });
//     const savedItem = await item.save();
//     res.status(201).json(savedItem);
//   } catch (error) {
//     console.error("Error", error);
//     res.status(500).json({ message: "Internal error" });
//   }
// }

// // export async function updateItem(req, res) {
// //   try {
// //     const {
// //       name,
// //       price,
// //       description,
// //       license,
// //       enginePower,
// //       fuelType,
// //       transmission,
// //       seat,
// //       fuelEconomy,
// //       engineType,
// //       year,
// //       color,
// //       specialMark,
// //     } = req.body;
// //     await Item.findByIdAndUpdate(req.params.id, {
// //       name,
// //       price,
// //       description,
// //       license,
// //       enginePower,
// //       fuelType,
// //       transmission,
// //       seat,
// //       fuelEconomy,
// //       engineType,
// //       year,
// //       color,
// //       specialMark,
// //     }),
// //       {
// //         new: true,
// //       };
// //     if (!updateItem) return res.status(404).json({ message: "Note not found" });
// //     res.status(200).json(updateItem);
// //   } catch (error) {
// //     console.error("Error", error);
// //     res.status(500).json({ message: "Internal error" });
// //   }
// // }

// // export async function deleteItem(req, res) {
// //   try {
// //     const deletedItem = await Item.findByIdAndDelete(req.params.id);
// //     if (!deletedItem) return res.status(404).json({ message: "Item not found" });
// //     res.status(200).json({ message: "Item deleted" });
// //   } catch (error) {
// //     console.error("Error", error);
// //     res.status(500).json({ message: "Internal error" });
// //   }
// // }

// export async function createItemDetails(req, res) {
//   try {
//     const { itemId, price } = req.body;
//     const details = new Details({ itemId, price });
//     const savedDetails = await details.save();
//     res.status(201).json(savedDetails);
//   } catch (error) {
//     console.error("Error", error);
//     res.status(500).json({ message: "Internal error" });
//   }
// }


