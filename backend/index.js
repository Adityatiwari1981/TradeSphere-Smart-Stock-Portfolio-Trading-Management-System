import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"; // 👈 ADD

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use("/uploads", express.static("uploads"));

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes); // 👈 ADD

app.listen(PORT, async () => {
  console.log("App started!");
  try {
    await mongoose.connect(uri);
    console.log("DB connected!");
  } catch (err) {
    console.log("DB ERROR:", err);
  }
});
