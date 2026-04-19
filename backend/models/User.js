// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// }, { timestamps: true });

// module.exports = mongoose.model("User", userSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: function () {
        return !this.googleId; // Google user ke liye password required nahi
      },
    },

    // OTP reset ke liye
    otp: String,
    otpExpire: Date,

    // Google login ke liye
    googleId: String,

    // Profile photo
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);