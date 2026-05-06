import React, { useEffect, useState } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/dashboard/holdings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (res.data.success) {
          setAllHoldings(res.data.holdings);
        }
      } catch (error) {
        console.log("Holdings API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  const labels = allHoldings.map((item) => item.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((item) => item.price),
        backgroundColor: "rgba(94,53,177,0.6)",
      },
    ],
  };

  const totalInvestment = allHoldings.reduce(
    (sum, item) => sum + item.avg * item.qty,
    0,
  );

  const currentValue = allHoldings.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  const pnl = currentValue - totalInvestment;

  const pnlPercent =
    totalInvestment > 0 ? ((pnl / totalInvestment) * 100).toFixed(2) : "0.00";

  if (loading) {
    return <h5 className="p-4">Loading Holdings...</h5>;
  }

  const addDummyHolding = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/dashboard/add-holdings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log("✅ Holding Added:", res.data);

      window.location.reload();
    } catch (error) {
      console.log("❌ Add Holding Error:", error);
    }
  };

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="title">Holdings ({allHoldings.length})</h3>

        <button
          className="btn text-white"
          style={{
            backgroundColor: "#5E35B1",
            borderRadius: "10px",
          }}
          onClick={addDummyHolding}
        >
          + Add Holding
        </button>
      </div>

      <div className="order-table table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. Cost</th>
              <th>LTP</th>
              <th>Cur. Value</th>
              <th>P&L</th>
              <th>Net Chg.</th>
              <th>Day Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const profit = curValue - stock.avg * stock.qty;

              const profClass = profit >= 0 ? "text-success" : "text-danger";

              const dayClass = stock.isLoss ? "text-danger" : "text-success";

              return (
                <tr key={index}>
                  <td className="fw-semibold">{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>₹{stock.avg.toFixed(2)}</td>
                  <td>₹{stock.price.toFixed(2)}</td>
                  <td>₹{curValue.toFixed(2)}</td>

                  <td className={profClass}>₹{profit.toFixed(2)}</td>

                  <td className={profClass}>{stock.net}</td>

                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* SUMMARY */}
      <div className="row g-4 mt-2 mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-3">
            <h6 className="text-muted">Total Investment</h6>
            <h5 className="fw-bold">₹{totalInvestment.toFixed(2)}</h5>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-3">
            <h6 className="text-muted">Current Value</h6>
            <h5 className="fw-bold">₹{currentValue.toFixed(2)}</h5>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm border-0 p-3">
            <h6 className="text-muted">Overall P&L</h6>
            <h5
              className={
                pnl >= 0 ? "fw-bold text-success" : "fw-bold text-danger"
              }
            >
              ₹{pnl.toFixed(2)} ({pnlPercent}%)
            </h5>
          </div>
        </div>
      </div>

      {/* GRAPH */}
      <div className="card shadow-sm border-0 p-3">
        <h5 className="mb-3">Portfolio Overview</h5>
        <VerticalGraph data={data} />
      </div>
    </div>
  );
};

export default Holdings;
