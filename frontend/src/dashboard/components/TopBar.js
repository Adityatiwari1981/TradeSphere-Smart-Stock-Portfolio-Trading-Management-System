import React, { useState, useEffect } from "react";

import axios from "axios";
import { NotificationsNone, AccountCircle } from "@mui/icons-material";

const TopBar = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const [search, setSearch] = useState("");

  const [results, setResults] = useState([]);
  useEffect(() => {
    const fetchStocks = async () => {
      try {
        if (!search) {
          setResults([]);
          return;
        }

        const token = localStorage.getItem("token");

        const res = await axios.get(
          `http://localhost:5000/api/dashboard/search-stock?q=${search}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (res.data.success) {
          setResults(res.data.stocks);
        }
      } catch (error) {
        console.log("Search Error:", error);
      }
    };

    fetchStocks();
  }, [search]);

  return (
    <div className="topbar-container">
      {/* LEFT SECTION */}
      <div className="d-flex align-items-center gap-1">
        {/* LOGO */}
        <div>
          <h4
            style={{
              margin: 0,
              fontWeight: "700",
              color: "#5E35B1",
            }}
          >
            TradeSphere
          </h4>
        </div>

        {/* NAVIGATION */}
        {/* SEARCH BAR */}
        <div
          style={{
            marginLeft: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Search stocks..."
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "240px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              padding: "8px 14px",
              fontSize: "14px",
            }}
          />
          {results.length > 0 && (
            <div
              className="bg-white shadow-sm border mt-1"
              style={{
                position: "absolute",
                width: "240px",
                borderRadius: "10px",
                zIndex: 9999,
                overflow: "hidden",
              }}
            >
              {results.map((stock, index) => (
                <div
                  key={index}
                  onClick={async () => {
                    try {
                      const token = localStorage.getItem("token");

                      const res = await axios.post(
                        "http://localhost:5000/api/dashboard/add-watchlist-stock",
                        {
                          name: stock,
                        },
                        {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        },
                      );

                      console.log("✅ Added:", res.data);

                      alert(`${stock} added to watchlist`);

                      setSearch("");
                      setResults([]);

                      window.location.reload();
                    } catch (error) {
                      console.log(error);

                      alert(error.response?.data?.message || "Failed to add");
                    }
                  }}
                  style={{
                    padding: "10px 14px",
                    cursor: "pointer",
                    borderBottom: "1px solid #f1f1f1",
                  }}
                >
                  {stock}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="d-flex align-items-center gap-4">
          <a href="/dashboard" className="topbar-link">
            Dashboard
          </a>

          <a href="/dashboard/orders" className="topbar-link">
            Orders
          </a>

          <a href="/dashboard/holdings" className="topbar-link">
            Holdings
          </a>

          <a href="/dashboard/positions" className="topbar-link">
            Positions
          </a>
          <a href="/dashboard/analytics" className="topbar-link">
            Analytics
          </a>

          <a href="/dashboard/funds" className="topbar-link">
            Funds
          </a>

          <a href="/dashboard/apps" className="topbar-link">
            Apps
          </a>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="d-flex align-items-center gap-3">
        {/* MARKET */}
        <div className="d-flex gap-3">
          <div>
            <small className="text-muted">NIFTY</small>

            <div
              style={{
                color: Math.random() > 0.5 ? "#00A86B" : "#f44336",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              {(Math.random() * 500).toFixed(0)}
            </div>
          </div>

          <div>
            <small className="text-muted">SENSEX</small>

            <div
              style={{
                color: "#00A86B",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              +542
            </div>
          </div>
        </div>

        {/* NOTIFICATION */}
        <button
          className="btn btn-light border rounded-circle"
          style={{
            width: "40px",
            height: "40px",
          }}
        >
          <NotificationsNone />
        </button>

        {/* USER */}
        <div className="dropdown">
          <div
            className="d-flex align-items-center gap-2"
            data-bs-toggle="dropdown"
            style={{
              background: "#fff",
              padding: "6px 12px",
              borderRadius: "12px",
              border: "1px solid #eee",
              cursor: "pointer",
            }}
          >
            <AccountCircle
              style={{
                color: "#5E35B1",
                fontSize: "34px",
              }}
            />

            <div>
              <div
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                {user.name || "User"}
              </div>

              <small className="text-muted">Investor</small>
            </div>
          </div>

          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item">My Profile</button>
            </li>

            <li>
              <button className="dropdown-item">Settings</button>
            </li>

            <li>
              <hr className="dropdown-divider" />
            </li>

            <li>
              <button
                className="dropdown-item text-danger"
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/login";
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
