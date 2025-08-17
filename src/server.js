/** @format */

import express from "express";
import mongoose from "mongoose";
import itemRoutes from "./routes/itemRoutes.js";

const app = express();
app.use(express.json());
import fs from "fs";
import path from "path";

const uploadsDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
app.use("/uploads", express.static(uploadsDir));

mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/items", itemRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
