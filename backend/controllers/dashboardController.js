import Watchlist from "../models/Watchlist.js";

//
// ================= GET WATCHLIST =================
//
export const getWatchlist = async (req, res) => {
  try {
    const watchlist = await Watchlist.find({
      user: req.user.id,
    });

    res.status(200).json({
      success: true,
      watchlist,
    });
  } catch (error) {
    console.log("Watchlist error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//
// ================= ADD STOCK =================
//
export const addStock = async (req, res) => {
  try {
    const { name, price, percent, isDown } = req.body;

    const stock = await Watchlist.create({
      user: req.user.id,
      name,
      price,
      percent,
      isDown,
    });

    res.status(201).json({
      success: true,
      stock,
    });
  } catch (error) {
    console.log("Add stock error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//
// ================= DELETE STOCK =================
//
export const deleteStock = async (req, res) => {
  try {
    const { id } = req.params;

    await Watchlist.findOneAndDelete({
      _id: id,
      user: req.user.id,
    });

    res.status(200).json({
      success: true,
      message: "Stock removed",
    });
  } catch (error) {
    console.log("Delete stock error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};