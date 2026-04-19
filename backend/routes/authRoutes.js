import express from "express";
const router = express.Router();

// Middlewares
import { upload } from "../config/multer.js";
import { protect } from "../middleware/authMiddleware.js";

// Controllers
import {
  signup,
  login,
  forgotPassword,
  resetPassword,
  googleLogin,
  uploadProfilePic,
  changePassword,
  getMe, // 👈 yahi use karna hai
} from "../controllers/authController.js";

// 🔐 Auth routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/google-login", googleLogin);

// 🔑 Password reset (OTP)
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

// 👤 User profile
router.post("/upload-photo", protect, upload.single("image"), uploadProfilePic);
router.post("/change-password", protect, changePassword);

// 📊 User data
router.get("/me", protect, getMe);

export default router;