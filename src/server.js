import express from "express";
import itemsRoutes from "./routes/itemRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();
//middleware
// app.use(express.json()); ///this middleware will parse Json bodies: req.body
// app.use(ratelimiter);

//Simple custom middleware  test for middle ware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", itemsRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Sever is running", PORT);
  });
});
