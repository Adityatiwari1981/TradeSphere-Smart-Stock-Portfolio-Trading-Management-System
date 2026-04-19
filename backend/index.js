import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// Middleware
app.use(cors({
  origin: "*",
}));
app.use(express.json());

// Static folder (for images)
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRoutes);

// PORT
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

// ✅ DB connect first, then start server
mongoose.connect(uri)
  .then(() => {
    console.log("DB connected!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  })
  .catch((err) => {
    console.log("DB ERROR:", err);
  });