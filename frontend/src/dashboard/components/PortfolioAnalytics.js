import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const PortfolioAnalytics = () => {

  const [holdings, setHoldings] =
    useState([]);

  useEffect(() => {

    const fetchData =
      async () => {

        try {

          const token =
            localStorage.getItem(
              "token"
            );

          const res =
            await axios.get(
              "http://localhost:5000/api/dashboard/holdings",
              {
                headers: {
                  Authorization:
                    `Bearer ${token}`,
                },
              }
            );

          if (
            res.data.success
          ) {
            setHoldings(
              res.data.holdings
            );
          }

        } catch (error) {

          console.log(
            error
          );
        }
      };

    fetchData();

  }, []);

  // 🔥 Calculations
  const totalInvestment =
    holdings.reduce(
      (sum, stock) =>
        sum +
        stock.avg *
          stock.qty,
      0
    );

  const currentValue =
    holdings.reduce(
      (sum, stock) =>
        sum +
        stock.price *
          stock.qty,
      0
    );

  const totalProfit =
    currentValue -
    totalInvestment;

  const bestStock =
    holdings.reduce(
      (best, stock) => {

        const pnl =
          stock.price *
            stock.qty -
          stock.avg *
            stock.qty;

        return pnl >
          (
            best?.pnl || 0
          )
          ? {
              ...stock,
              pnl,
            }
          : best;
      },
      null
    );

  const worstStock =
    holdings.reduce(
      (worst, stock) => {

        const pnl =
          stock.price *
            stock.qty -
          stock.avg *
            stock.qty;

        return pnl <
          (
            worst?.pnl || 0
          )
          ? {
              ...stock,
              pnl,
            }
          : worst;
      },
      null
    );

  const winRatio =
    holdings.length > 0
      ? (
          (holdings.filter(
            (stock) =>
              stock.price >
              stock.avg
          ).length /
            holdings.length) *
          100
        ).toFixed(0)
      : 0;

  return (
    <div className="container-fluid py-4">

      <h2
        className="fw-bold mb-4"
        style={{
          color: "#5E35B1",
        }}
      >
        Portfolio Analytics
      </h2>

      <div className="row g-4">

        {/* Investment */}
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-3">
            <h6>Total Investment</h6>

            <h4>
              ₹
              {totalInvestment.toFixed(
                2
              )}
            </h4>
          </div>
        </div>

        {/* Current */}
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-3">
            <h6>Current Value</h6>

            <h4>
              ₹
              {currentValue.toFixed(
                2
              )}
            </h4>
          </div>
        </div>

        {/* Profit */}
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-3">
            <h6>Total Profit</h6>

            <h4
              className={
                totalProfit >= 0
                  ? "text-success"
                  : "text-danger"
              }
            >
              ₹
              {totalProfit.toFixed(
                2
              )}
            </h4>
          </div>
        </div>

        {/* Win Ratio */}
        <div className="col-md-3">
          <div className="card border-0 shadow-sm p-3">
            <h6>Win Ratio</h6>

            <h4>
              {winRatio}%
            </h4>
          </div>
        </div>

      </div>

      {/* BEST / WORST */}
      <div className="row g-4 mt-2">

        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-4">

            <h5 className="mb-3">
              🚀 Best Performing Stock
            </h5>

            {bestStock ? (
              <>
                <h3>
                  {bestStock.name}
                </h3>

                <h4 className="text-success">
                  ₹
                  {bestStock.pnl.toFixed(
                    2
                  )}
                </h4>
              </>
            ) : (
              <p>No data</p>
            )}

          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm p-4">

            <h5 className="mb-3">
              📉 Worst Performing Stock
            </h5>

            {worstStock ? (
              <>
                <h3>
                  {worstStock.name}
                </h3>

                <h4 className="text-danger">
                  ₹
                  {worstStock.pnl.toFixed(
                    2
                  )}
                </h4>
              </>
            ) : (
              <p>No data</p>
            )}

          </div>
        </div>

      </div>

      {/* HEALTH */}
      <div className="card border-0 shadow-sm p-4 mt-4">

        <h4 className="mb-3">
          Portfolio Health
        </h4>

        <div
          className="progress"
          style={{
            height: "30px",
            borderRadius: "20px",
          }}
        >

          <div
            className="progress-bar"
            style={{
              width: `${winRatio}%`,
              backgroundColor:
                "#5E35B1",
              fontWeight: "bold",
            }}
          >
            {winRatio}% Healthy
          </div>

        </div>

      </div>

    </div>
  );
};

export default PortfolioAnalytics;