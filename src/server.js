import express from "express";
import itemsRoutes from "./routes/itemRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); ///this middleware will parse Json bodies: req.body

app.use("/items", itemsRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Sever is running", PORT);
  });
});
