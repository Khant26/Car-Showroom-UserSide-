/** @format */

// import Item from "../models/Item.js";
// import Category from "../models/details.js";

// export async function getAllCategorys(_, res) {
//   try {
//     const categorys = await Category.find().sort({ createdAt: -1 }); // -1 will sort in desc. order(newest first)
//     res.status(200).json(categorys);
//   } catch (error) {
//     console.error("Error", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }

// export async function getCategoryById(req, res) {
//   try {
//     const category = await Category.findById(req.params.id);
//     if (!category) return res.status(404).json({ message: "Note not found!" });
//     res.json(category);
//   } catch (error) {
//     console.error("Error", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }

// export async function createCategory(req, res) {
//   try {
//     const {
     
//     } = req.body;
//     const item = new Category({
    
//     });
//     const savedCategory = await category.save();
//     res.status(201).json(savedCategory);
//   } catch (error) {
//     console.error("Error", error);
//     res.status(500).json({ message: "Internal error" });
//   }
// }

// export async function updateCategory(req, res) {
//   try {
//     const {
      
//     } = req.body;
//     await Category.findByIdAndUpdate(req.params.id, {
    
//     }),
//       {
        
//       };
//     if (!updateCategory) return res.status(404).json({ message: "Category not found" });
//     res.status(200).json(updateCategory);
//   } catch (error) {
//     console.error("Error", error);
//     res.status(500).json({ message: "Internal error" });
//   }
// }

// export async function deleteCategory(req, res) {
//   try {
//     const deletedCategory = await Category.findByIdAndDelete(req.params.id);
//     if (!deletedCategory) return res.status(404).json({ message: "Category not found" });
//     res.status(200).json({ message: "Category deleted" });
//   } catch (error) {
//     console.error("Error", error);
//     res.status(500).json({ message: "Internal error" });
//   }
// }



