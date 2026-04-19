import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendEmail } from "../config/email.js";

// 🔐 Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

//
// ================= SIGNUP =================
//
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user._id);

    res.status(201).json({
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic || null,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//
// ================= LOGIN =================
//
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.password === "google_auth") {
      return res.status(400).json({
        message: "Please login with Google",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic || null,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//
// ================= GOOGLE LOGIN =================
//
export const googleLogin = async (req, res) => {
  try {
    const { name, email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        password: "google_auth",
      });
    }

    const token = generateToken(user._id);

    res.status(200).json({
      message: "Google login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profilePic: user.profilePic || null,
      },
    });
  } catch (error) {
    console.log("Google login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//
// ================= FORGOT PASSWORD (OTP) =================
//
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    user.otp = otp;
    user.otpExpire = Date.now() + 5 * 60 * 1000;

    await user.save();

    await sendEmail(user.email, "Password Reset OTP", `Your OTP is: ${otp}`);

    res.status(200).json({
      message: "OTP sent to email",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//
// ================= RESET PASSWORD =================
//
export const resetPassword = async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    const user = await User.findOne({
      email,
      otp,
      otpExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;
    user.otp = undefined;
    user.otpExpire = undefined;

    await user.save();

    res.status(200).json({
      message: "Password reset successful",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//
// ================= CHANGE PASSWORD =================
//
export const changePassword = async (req, res) => {
  try {
    const userId = req.user.id;
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(userId);

    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Old password incorrect" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    res.status(200).json({
      message: "Password changed successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//
// ================= GET CURRENT USER =================
//
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


//
// ================= UPLOAD PROFILE PIC =================
//
export const uploadProfilePic = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    user.profilePic = req.file.filename;

    await user.save();

    res.status(200).json({
      message: "Profile photo uploaded",
      profilePic: user.profilePic,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};