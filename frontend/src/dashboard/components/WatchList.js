import React, { useState, useContext, useMemo, useEffect } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import API, { getAuthHeaders } from "../../utils/api";

import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { DoughnutChart } from "./DoughnoutChart";

const WatchList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [watchlist, setWatchlist] = useState([]);

  const [loading, setLoading] = useState(true);

  /* ================= FETCH WATCHLIST ================= */

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:5000/api/dashboard/live-prices",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        console.log("✅ Watchlist Response:", res.data);

        if (res.data.success) {
          setWatchlist(res.data.stocks);
        }
      } catch (error) {
        console.log("❌ Watchlist API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchlist();
    const interval = setInterval(() => {
      fetchWatchlist();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  /* ================= SEARCH FILTER ================= */

  const filteredWatchlist = useMemo(() => {
    return watchlist.filter((stock) =>
      stock.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, watchlist]);

  /* ================= CHART DATA ================= */

  const labels = filteredWatchlist.map((stock) => stock.name);

  const data = {
    labels,

    datasets: [
      {
        label: "Price",

        data: filteredWatchlist.map((stock) => stock.price),

        backgroundColor: [
          "rgba(94,53,177,0.65)",
          "rgba(0,230,118,0.65)",
          "rgba(33,150,243,0.65)",
          "rgba(255,152,0,0.65)",
          "rgba(244,67,54,0.65)",
          "rgba(156,39,176,0.65)",
        ],

        borderWidth: 0,
      },
    ],
  };

  if (loading) {
    return <div className="p-4">Loading Watchlist...</div>;
  }

  return (
    <div
      className="watchlist-container d-flex flex-column"
      style={{
        width: "340px",
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        borderRight: "1px solid #f0f0f0",
        overflow: "hidden",
      }}
    >
      {/* ================= HEADER ================= */}

      <div className="p-3 border-bottom">
        <h5
          className="fw-bold mb-3"
          style={{
            color: "#5E35B1",
            letterSpacing: "0.3px",
          }}
        >
          TradeSphere Watchlist
        </h5>

        <div className="position-relative">
          <input
            type="text"
            placeholder="Search stocks..."
            className="form-control border-0 shadow-sm"
            style={{
              backgroundColor: "#f7f8fc",
              padding: "10px 14px",
              borderRadius: "10px",
              fontSize: "14px",
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="small text-muted mt-2">
          {filteredWatchlist.length} / 50 Stocks
        </div>
      </div>

      {/* ================= STOCK LIST ================= */}

      <div
        style={{
          flex: 1,
          overflowY: "auto",
        }}
      >
        <ul className="list-unstyled m-0 p-0">
          {filteredWatchlist.map((stock, index) => (
            <WatchListItem stock={stock} key={index} />
          ))}

          {filteredWatchlist.length === 0 && (
            <div className="text-center py-5 text-muted small">
              No stocks found.
            </div>
          )}
        </ul>
      </div>

      {/* ================= CHART ================= */}

      <div className="border-top p-3">
        <h6 className="fw-bold mb-3">Market Snapshot</h6>

        <DoughnutChart data={data} />
      </div>
    </div>
  );
};

export default WatchList;

/* ====================================================== */

const WatchListItem = ({ stock }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <li
      className="border-bottom px-3 py-2"
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
      style={{
        cursor: "pointer",
        transition: "0.2s",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <p
            className="mb-1 fw-semibold"
            style={{
              color: stock.isDown ? "#f44336" : "#00A86B",

              fontSize: "14px",
            }}
          >
            {stock.name}
          </p>

          <small className="text-muted">₹{stock.price}</small>
        </div>

        <div className="text-end">
          <div
            className="fw-bold"
            style={{
              fontSize: "13px",

              color: stock.isDown ? "#f44336" : "#00A86B",
            }}
          >
            {stock.percent}
          </div>

          {stock.isDown ? (
            <KeyboardArrowDown
              style={{
                fontSize: "18px",
                color: "#f44336",
              }}
            />
          ) : (
            <KeyboardArrowUp
              style={{
                fontSize: "18px",
                color: "#00A86B",
              }}
            />
          )}
        </div>
      </div>

      {showActions && (
        <WatchListActions uid={stock.name} stockPrice={stock.price} />
      )}
    </li>
  );
};

/* ====================================================== */

const WatchListActions = ({ uid, stockPrice }) => {
  const generalContext = useContext(GeneralContext);

  /* ================= BUY STOCK ================= */

  const handleBuyClick = async () => {
    try {
      const stockData = {
        stock: uid,
        qty: 1,
        price: stockPrice,
      };

      const res = await fetch(`${API}/dashboard/buy-stock`, {
        method: "POST",

        headers: {
          ...getAuthHeaders(),
          "Content-Type": "application/json",
        },

        body: JSON.stringify(stockData),
      });

      const data = await res.json();

      console.log("✅ Buy Stock:", data);

      alert("Stock Bought Successfully 🚀");

      window.location.reload();
    } catch (error) {
      console.log("❌ Buy Stock Error:", error);
    }
  };

  /* ================= SELL STOCK ================= */

  const handleSellClick = async () => {
    try {
      const res = await axios.post(
        `${API}/dashboard/sell-stock`,
        {
          stock: uid,
          qty: 1,
          price: stockPrice,
        },

        {
          headers: getAuthHeaders(),
        },
      );

      console.log("✅ Sell Success:", res.data);

      alert("Stock sold successfully");

      window.location.reload();
    } catch (error) {
      console.log("❌ Sell Error:", error.response?.data || error.message);

      alert(error.response?.data?.message || "Sell failed");
    }
  };

  /* ================= ANALYTICS ================= */

  const handleAnalytics = () => {
    alert(`${uid} analytics feature coming soon 🚀`);
  };

  /* ================= MORE ================= */

  const handleMore = () => {
    alert(`More options for ${uid} coming soon 🚀`);
  };

  return (
    <div className="d-flex gap-2 mt-2 flex-wrap">
      {/* BUY */}

      <Tooltip title="Buy" arrow TransitionComponent={Grow}>
        <button
          onClick={handleBuyClick}
          className="btn btn-sm text-white"
          style={{
            backgroundColor: "#00A86B",
            fontSize: "12px",
            borderRadius: "8px",
          }}
        >
          Buy
        </button>
      </Tooltip>

      {/* SELL */}

      <Tooltip title="Sell" arrow TransitionComponent={Grow}>
        <button
          onClick={handleSellClick}
          className="btn btn-sm text-white"
          style={{
            backgroundColor: "#f44336",
            fontSize: "12px",
            borderRadius: "8px",
          }}
        >
          Sell
        </button>
      </Tooltip>

      {/* ANALYTICS */}

      <Tooltip title="Analytics" arrow TransitionComponent={Grow}>
        <button
          onClick={handleAnalytics}
          className="btn btn-sm btn-light border"
        >
          <BarChartOutlined fontSize="small" />
        </button>
      </Tooltip>

      {/* MORE */}

      <Tooltip title="More" arrow TransitionComponent={Grow}>
        <button onClick={handleMore} className="btn btn-sm btn-light border">
          <MoreHoriz fontSize="small" />
        </button>
      </Tooltip>
    </div>
  );
};
