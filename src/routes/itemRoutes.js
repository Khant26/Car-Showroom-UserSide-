import express from "express";
import {
  createItem,
  deleteItem,
  getAllDetails,
  updateItem,
  getItemById,
} from "../controllers/itemsController.js";

const router = express.Router();
router.get("/", getAllDetails);
router.get("/:id", getItemById);
router.post("/", createItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
