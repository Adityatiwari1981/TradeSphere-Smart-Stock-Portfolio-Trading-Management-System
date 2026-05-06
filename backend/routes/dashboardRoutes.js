import express from "express";
import { protect } from "../middleware/authMiddleware.js";

import Watchlist from "../models/Watchlist.js";
import Holding from "../models/Holding.js";
import Order from "../models/Order.js";
import stocks from "../data/stocks.js";
import User from "../models/User.js";
const router = express.Router();

/* =========================================================
   SUMMARY
========================================================= */
router.get("/summary", protect, async (req, res) => {
  try {
    const userId = req.user.id;

    const holdings = await Holding.find({
      user: userId,
    });

    let investment = 0;
    let currentValue = 0;

    holdings.forEach((item) => {
      investment += item.avg * item.qty;
      currentValue += item.price * item.qty;
    });

    const pnl = currentValue - investment;

    const pnlPercent =
      investment > 0
        ? ((pnl / investment) * 100).toFixed(2)
        : 0;

    res.json({
      success: true,

      availableMargin: 25000,
      marginUsed: 5000,
      openingBalance: 30000,

      holdingsCount: holdings.length,

      pnl: Number(pnl.toFixed(2)),
      pnlPercent,

      currentValue: Number(
        currentValue.toFixed(2)
      ),

      investment: Number(
        investment.toFixed(2)
      ),
    });
  } catch (error) {
    console.log("Summary Error:", error);

    res.status(500).json({
      success: false,
      message: "Summary fetch failed",
    });
  }
});

/* =========================================================
   HOLDINGS
========================================================= */
router.get("/holdings", protect, async (req, res) => {
  try {
    const userId = req.user.id;

    const holdings = await Holding.find({
      user: userId,
    });

    const updatedHoldings = holdings.map(
      (item) => {
        const currentValue =
          item.price * item.qty;

        const investment =
          item.avg * item.qty;

        const pnl =
          ((currentValue - investment) /
            investment) *
          100;

        return {
          ...item._doc,

          net: `${pnl.toFixed(2)}%`,

          day:
            pnl >= 0
              ? `+${pnl.toFixed(2)}%`
              : `${pnl.toFixed(2)}%`,

          isLoss: pnl < 0,
        };
      }
    );

    res.json({
      success: true,
      holdings: updatedHoldings,
    });
  } catch (error) {
    console.log("Holdings Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch holdings",
    });
  }
});

/* =========================================================
   ORDERS
========================================================= */
router.get("/orders", protect, async (req, res) => {
  try {
    const userId = req.user.id;

    const orders = await Order.find({
      user: userId,
    }).sort({
      createdAt: -1,
    });

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.log("Orders Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
    });
  }
});

/* =========================================================
   POSITIONS
========================================================= */
router.get("/positions", protect, async (req, res) => {
  try {
    const userId = req.user.id;

    const holdings = await Holding.find({
      user: userId,
    });

    const positions = holdings.map(
      (item) => {
        const pnl =
          item.price * item.qty -
          item.avg * item.qty;

        return {
          product: "CNC",

          name: item.name,

          qty: item.qty,

          avg: item.avg,

          price: item.price,

          day:
            pnl >= 0
              ? `+${(
                  (pnl /
                    (item.avg * item.qty)) *
                  100
                ).toFixed(2)}%`
              : `${(
                  (pnl /
                    (item.avg * item.qty)) *
                  100
                ).toFixed(2)}%`,

          isLoss: pnl < 0,
        };
      }
    );

    res.json({
      success: true,
      positions,
    });
  } catch (error) {
    console.log("Positions Error:", error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch positions",
    });
  }
});

/* =========================================================
   WATCHLIST
========================================================= */
router.get("/watchlist", protect, async (req, res) => {
  try {
    const userId = req.user.id;

    const watchlist = await Watchlist.find({
      user: userId,
    });

    res.json({
      success: true,
      watchlist,
    });
  } catch (error) {
    console.log("Watchlist Error:", error);

    res.status(500).json({
      success: false,
      message:
        "Failed to fetch watchlist",
    });
  }
});

/* =========================================================
   FUNDS
========================================================= */
router.get("/funds", protect, (req, res) => {
  res.json({
    success: true,

    funds: {
      available: 4043.1,
      used: 3757.3,
      cash: 4043.1,
      opening: 4043.1,
      payin: 4064,

      span: 0,
      delivery: 0,
      exposure: 0,
      premium: 0,

      collateralLiquid: 0,
      collateralEquity: 0,
      totalCollateral: 0,
    },
  });
});

/* =========================================================
   TEMP ADD WATCHLIST
========================================================= */
router.get(
  "/add-watchlist",
  protect,
  async (req, res) => {
    try {
      const userId = req.user.id;

      // 🔥 Prevent duplicates
      const existing =
        await Watchlist.findOne({
          user: userId,
        });

      if (existing) {
        return res.json({
          success: true,
          message:
            "Watchlist already exists",
        });
      }

      const data = [
        {
          name: "INFY",
          price: 1555,
          percent: "-1.6%",
          isDown: true,
        },

        {
          name: "TCS",
          price: 3194,
          percent: "+0.25%",
          isDown: false,
        },

        {
          name: "RELIANCE",
          price: 2450,
          percent: "+1.12%",
          isDown: false,
        },
      ];

      const newData = data.map(
        (item) => ({
          ...item,
          user: userId,
        })
      );

      await Watchlist.insertMany(newData);

      res.json({
        success: true,
        message: "Watchlist added",
      });
    } catch (error) {
      console.log(
        "Add Watchlist Error:",
        error
      );

      res.status(500).json({
        success: false,
        message: "Error adding watchlist",
      });
    }
  }
);

/* =========================================================
   TEMP ADD HOLDINGS
========================================================= */
router.get(
  "/add-holdings",
  protect,
  async (req, res) => {
    try {
      const userId = req.user.id;

      // 🔥 Prevent duplicates
      const existing =
        await Holding.findOne({
          user: userId,
        });

      if (existing) {
        return res.json({
          success: true,
          message:
            "Holdings already exist",
        });
      }

      const data = [
        {
          name: "INFY",
          qty: 2,
          avg: 1350,
          price: 1555,
        },

        {
          name: "TCS",
          qty: 1,
          avg: 3000,
          price: 3194,
        },
      ];

      const newData = data.map(
        (item) => ({
          ...item,
          user: userId,
        })
      );

      await Holding.insertMany(newData);

      res.json({
        success: true,
        message: "Holdings added",
      });
    } catch (error) {
      console.log(
        "Add Holdings Error:",
        error
      );

      res.status(500).json({
        success: false,
        message: "Error adding holdings",
      });
    }
  }
);

/* =========================================================
   BUY STOCK
========================================================= */
router.post(
  "/buy-stock",
  protect,
  async (req, res) => {
    try {
      const userId = req.user.id;

      const {
        stock,
        qty,
        price,
      } = req.body;

      // 🔥 Check existing holding
      const existingHolding =
        await Holding.findOne({
          user: userId,
          name: stock,
        });

      if (existingHolding) {
        existingHolding.qty += Number(qty);

        existingHolding.price =
          Number(price);

        await existingHolding.save();
      } else {
        await Holding.create({
          user: userId,

          name: stock,

          qty,

          avg: price,

          price,
        });
      }

      // 🔥 Save order history
      await Order.create({
        user: userId,

        stock,

        qty,

        price,

        type: "BUY",

        status: "Completed",
      });

      res.status(201).json({
        success: true,
        message:
          "Stock bought successfully",
      });
    } catch (error) {
      console.log("Buy Error:", error);

      res.status(500).json({
        success: false,
        message:
          "Failed to buy stock",
      });
    }
  }
);

router.post("/sell-stock", protect, async (req, res) => {
  try {

    const userId = req.user.id;

    const {
      stock,
      qty,
      price,
    } = req.body;

    // 🔥 Find Holding
    const holding = await Holding.findOne({
      user: userId,
      name: stock,
    });

    if (!holding) {
      return res.status(404).json({
        success: false,
        message: "Holding not found",
      });
    }

    // ❌ Not enough quantity
    if (holding.qty < qty) {
      return res.status(400).json({
        success: false,
        message:
          "Not enough stock quantity",
      });
    }

    // 🔥 Reduce quantity
    holding.qty -= qty;

    // 🔥 Delete if zero
    if (holding.qty === 0) {
      await holding.deleteOne();
    } else {
      await holding.save();
    }

    // 🔥 Save SELL order
    await Order.create({
      user: userId,
      stock,
      qty,
      price,
      type: "SELL",
      status: "Completed",
    });

    res.json({
      success: true,
      message:
        "Stock sold successfully",
    });

  } catch (error) {

    console.log("Sell Error:", error);

    res.status(500).json({
      success: false,
      message:
        "Failed to sell stock",
    });
  }
});

router.get("/search-stock", protect, (req, res) => {

  const query =
    req.query.q?.toLowerCase() || "";

  const results = stocks.filter((stock) =>
    stock.toLowerCase().includes(query)
  );

  res.json({
    success: true,
    stocks: results,
  });
});
router.post(
  "/add-watchlist-stock",
  protect,
  async (req, res) => {

    try {

      const userId = req.user.id;

      const { name } = req.body;

      // 🔥 Already exists check
      const exists =
        await Watchlist.findOne({
          user: userId,
          name,
        });

      if (exists) {
        return res.status(400).json({
          success: false,
          message:
            "Stock already exists",
        });
      }

      const stock =
        await Watchlist.create({
          user: userId,
          name,
          price:
            (
              Math.random() * 3000
            ).toFixed(2),
          percent:
            (
              Math.random() * 5
            ).toFixed(2) + "%",
          isDown:
            Math.random() > 0.5,
        });

      res.json({
        success: true,
        stock,
      });

    } catch (error) {

      console.log(
        "Add Watchlist Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to add stock",
      });
    }
  }
);
router.get(
  "/live-prices",
  protect,
  async (req, res) => {

    try {

      const userId = req.user.id;

      const watchlist =
        await Watchlist.find({
          user: userId,
        });

      const updated =
        watchlist.map((stock) => {

          // 🔥 Random market movement
          const change =
            (
              Math.random() * 20 -
              10
            ).toFixed(2);

          const newPrice =
            (
              Number(stock.price) +
              Number(change)
            ).toFixed(2);

          const percent =
            (
              (change /
                stock.price) *
              100
            ).toFixed(2);

          return {
            ...stock._doc,

            price: Number(newPrice),

            percent:
              `${percent}%`,

            isDown:
              Number(change) < 0,
          };
        });

      res.json({
        success: true,
        stocks: updated,
      });

    } catch (error) {

      console.log(
        "Live Price Error:",
        error
      );

      res.status(500).json({
        success: false,
        message:
          "Failed to fetch live prices",
      });
    }
  }
);

// router.get("/clear-data", protect, async (req, res) => {
//   try {

//     const userId = req.user.id;

//     await Holding.deleteMany({
//       user: userId,
//     });

//     await Watchlist.deleteMany({
//       user: userId,
//     });

//     await Order.deleteMany({
//       user: userId,
//     });

//     res.json({
//       success: true,
//       message: "All data cleared",
//     });

//   } catch (error) {

//     console.log(error);

//     res.status(500).json({
//       success: false,
//       message: "Clear failed",
//     });
//   }
// });

export default router;