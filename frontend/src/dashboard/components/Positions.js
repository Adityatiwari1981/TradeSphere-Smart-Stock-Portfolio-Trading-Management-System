import React, { useEffect, useState } from "react";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(
          "http://localhost:5000/api/dashboard/positions",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        if (data.success) {
          setPositions(data.positions || []);
        }
      } catch (error) {
        console.log("Positions API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  const totalPnL = positions.reduce((sum, stock) => {
    const pnl =
      stock.price * stock.qty - stock.avg * stock.qty;

    return sum + pnl;
  }, 0);

  if (loading) {
    return (
      <div className="container-fluid p-4">
        <h5 className="text-muted">
          Loading positions...
        </h5>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4 px-4">
      {/* Header */}
      <div className="mb-4">
        <h3
          className="fw-bold"
          style={{ color: "#5E35B1" }}
        >
          Open Positions ({positions.length})
        </h3>

        <p className="text-muted mb-0">
          Monitor your currently active market
          positions.
        </p>
      </div>

      {/* Empty State */}
      {positions.length === 0 ? (
        <div
          className="card border-0 shadow-sm text-center p-5"
          style={{ borderRadius: "16px" }}
        >
          <h5 className="fw-bold mb-2">
            No Open Positions
          </h5>

          <p className="text-muted mb-0">
            You currently do not have any running
            trades.
          </p>
        </div>
      ) : (
        <>
          {/* Table */}
          <div
            className="card border-0 shadow-sm"
            style={{ borderRadius: "16px" }}
          >
            <div className="table-responsive">
              <table className="table align-middle mb-0">
                <thead
                  style={{
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <tr>
                    <th className="ps-4">Product</th>
                    <th>Instrument</th>
                    <th>Qty</th>
                    <th>Avg</th>
                    <th>LTP</th>
                    <th>P&L</th>
                    <th className="pe-4">
                      Day Chg.
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {positions.map(
                    (stock, index) => {
                      const pnl =
                        stock.price *
                          stock.qty -
                        stock.avg *
                          stock.qty;

                      const isProfit =
                        pnl >= 0;

                      return (
                        <tr key={index}>
                          <td className="ps-4">
                            {stock.product}
                          </td>

                          <td className="fw-semibold">
                            {stock.name}
                          </td>

                          <td>
                            {stock.qty}
                          </td>

                          <td>
                            ₹
                            {stock.avg.toFixed(
                              2
                            )}
                          </td>

                          <td>
                            ₹
                            {stock.price.toFixed(
                              2
                            )}
                          </td>

                          <td
                            className={
                              isProfit
                                ? "text-success fw-bold"
                                : "text-danger fw-bold"
                            }
                          >
                            ₹
                            {pnl.toFixed(
                              2
                            )}
                          </td>

                          <td
                            className={`pe-4 ${
                              stock.isLoss
                                ? "text-danger fw-semibold"
                                : "text-success fw-semibold"
                            }`}
                          >
                            {stock.day}
                          </td>
                        </tr>
                      );
                    }
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="row g-4 mt-2">
            <div className="col-md-4">
              <div
                className="card border-0 shadow-sm"
                style={{
                  borderRadius: "14px",
                }}
              >
                <div className="card-body">
                  <h6 className="fw-bold">
                    Active Trades
                  </h6>

                  <p className="mb-0 text-muted">
                    {positions.length}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card border-0 shadow-sm"
                style={{
                  borderRadius: "14px",
                }}
              >
                <div className="card-body">
                  <h6 className="fw-bold">
                    Overall P&L
                  </h6>

                  <p
                    className={`mb-0 fw-bold ${
                      totalPnL >= 0
                        ? "text-success"
                        : "text-danger"
                    }`}
                  >
                    ₹
                    {totalPnL.toFixed(
                      2
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card border-0 shadow-sm"
                style={{
                  borderRadius: "14px",
                }}
              >
                <div className="card-body">
                  <h6 className="fw-bold">
                    TradeSphere Tip
                  </h6>

                  <p className="mb-0 text-muted small">
                    Use stop-loss for better
                    risk control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Positions;