import React, { useEffect, useState } from "react";

const Summary = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const token = localStorage.getItem("token");

  const [dashboard, setDashboard] = useState({
    availableMargin: "₹0",
    marginUsed: "₹0",
    openingBalance: "₹0",
    holdingsCount: 0,
    pnl: "₹0",
    pnlPercent: "0%",
    currentValue: "₹0",
    investment: "₹0",
  });

  const [loading, setLoading] = useState(true);

  // Fetch Summary Data
  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/dashboard/summary",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        setDashboard({
          availableMargin: `₹${(
            data.availableMargin || 0
          ).toLocaleString()}`,

          marginUsed: `₹${(
            data.usedMargin || 0
          ).toLocaleString()}`,

          openingBalance: `₹${(
            data.openingBalance || 0
          ).toLocaleString()}`,

          holdingsCount: data.holdingsCount || 0,

          pnl: `₹${(data.pnl || 0).toLocaleString()}`,

          pnlPercent: `${data.pnlPercent || 0}%`,

          currentValue: `₹${(
            data.currentValue || 0
          ).toLocaleString()}`,

          investment: `₹${(
            data.investment || 0
          ).toLocaleString()}`,
        });
      } catch (error) {
        console.log("Summary API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [token]);

  if (loading) {
    return (
      <div className="container-fluid py-5 text-center">
        <h5 className="text-muted">Loading Dashboard...</h5>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4 px-4">
      {/* Welcome */}
      <div className="mb-4">
        <h4 className="fw-bold mb-1" style={{ color: "#5E35B1" }}>
          Hi, {user.name ? user.name : "Trader"} 👋
        </h4>

        <p className="text-muted mb-0">
          Welcome back to your TradeSphere dashboard.
        </p>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {/* Equity */}
        <div className="col-md-6">
          <div
            className="card border-0 shadow-sm h-100"
            style={{ borderRadius: "16px" }}
          >
            <div className="card-body p-4">
              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-bold mb-0">Equity</h6>

                <span
                  className="badge"
                  style={{
                    backgroundColor: "#ede7f6",
                    color: "#5E35B1",
                  }}
                >
                  Wallet
                </span>
              </div>

              <h2 className="fw-bold">
                {dashboard.availableMargin}
              </h2>

              <p className="text-muted small mb-4">
                Margin Available
              </p>

              <hr />

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">
                  Margins Used
                </span>

                <span className="fw-semibold">
                  {dashboard.marginUsed}
                </span>
              </div>

              <div className="d-flex justify-content-between">
                <span className="text-muted">
                  Opening Balance
                </span>

                <span className="fw-semibold">
                  {dashboard.openingBalance}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Holdings */}
        <div className="col-md-6">
          <div
            className="card border-0 shadow-sm h-100"
            style={{ borderRadius: "16px" }}
          >
            <div className="card-body p-4">
              <div className="d-flex justify-content-between mb-3">
                <h6 className="fw-bold mb-0">
                  Holdings ({dashboard.holdingsCount})
                </h6>

                <span
                  className="badge"
                  style={{
                    backgroundColor: "#e8f5e9",
                    color: "#00A86B",
                  }}
                >
                  Active
                </span>
              </div>

              <h2
                className="fw-bold"
                style={{ color: "#00A86B" }}
              >
                {dashboard.pnl}

                <small className="ms-2 fs-6">
                  {dashboard.pnlPercent}
                </small>
              </h2>

              <p className="text-muted small mb-4">
                Profit & Loss
              </p>

              <hr />

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">
                  Current Value
                </span>

                <span className="fw-semibold">
                  {dashboard.currentValue}
                </span>
              </div>

              <div className="d-flex justify-content-between">
                <span className="text-muted">
                  Investment
                </span>

                <span className="fw-semibold">
                  {dashboard.investment}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Cards */}
      <div className="row g-4 mt-1">
        <div className="col-md-4">
          <div
            className="card border-0 shadow-sm"
            style={{ borderRadius: "14px" }}
          >
            <div className="card-body">
              <h6 className="fw-bold">Today's Status</h6>
              <p className="text-success mb-0">
                Market is Open 📈
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card border-0 shadow-sm"
            style={{ borderRadius: "14px" }}
          >
            <div className="card-body">
              <h6 className="fw-bold">Risk Meter</h6>
              <p className="text-warning mb-0">
                Moderate Portfolio
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className="card border-0 shadow-sm"
            style={{ borderRadius: "14px" }}
          >
            <div className="card-body">
              <h6 className="fw-bold">TradeSphere Tip</h6>
              <p className="text-muted small mb-0">
                Diversify your portfolio regularly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;