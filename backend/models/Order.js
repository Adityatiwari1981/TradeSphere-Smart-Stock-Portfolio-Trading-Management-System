import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    stock: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["BUY", "SELL"],
      default: "BUY",
    },

    qty: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      default: "Completed",
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "Order",
  orderSchema
);