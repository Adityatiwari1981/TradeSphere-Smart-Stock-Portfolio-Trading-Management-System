import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

const app = express();

/* ===============================
   MIDDLEWARE
================================= */
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ===============================
   STATIC FOLDER
================================= */
app.use("/uploads", express.static("uploads"));

/* ===============================
   ROUTES
================================= */

// Auth Routes
app.use("/api/auth", authRoutes);

// Dashboard Routes
app.use("/api/dashboard", dashboardRoutes);

/* ===============================
   TEST ROUTE
================================= */
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "TradeSphere Backend Running Successfully 🚀",
  });
});

/* ===============================
   PORT + DB
================================= */
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

/* ===============================
   DB CONNECT
================================= */
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected Successfully ✅");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀`);
    });
  })
  .catch((err) => {
    console.log("Database Error ❌", err);
  });
