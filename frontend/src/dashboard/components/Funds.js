import React, { useEffect, useState } from "react";

const Funds = () => {
  const [funds, setFunds] = useState({
    available: 0,
    used: 0,
    cash: 0,
    opening: 0,
    payin: 0,
    span: 0,
    delivery: 0,
    exposure: 0,
    premium: 0,
    collateralLiquid: 0,
    collateralEquity: 0,
    totalCollateral: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFunds = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/dashboard/funds"
        );

        const data = await res.json();

        if (data.success) {
          setFunds(data.funds);
        }
      } catch (error) {
        console.log("Funds API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFunds();
  }, []);

  const formatMoney = (value) => {
    return `₹${Number(value).toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  if (loading) {
    return (
      <div className="container-fluid p-4">
        <h5>Loading Funds...</h5>
      </div>
    );
  }

  return (
    <div className="container-fluid p-4">
      {/* Top Header */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
          <div>
            <h4
              className="fw-bold mb-1"
              style={{ color: "#5E35B1" }}
            >
              Funds & Balance
            </h4>

            <p className="text-muted mb-0">
              Instant zero-cost fund transfers with UPI
            </p>
          </div>

          <div className="mt-3 mt-md-0">
            <button className="btn btn-success me-2">
              Add Funds
            </button>

            <button className="btn btn-primary">
              Withdraw
            </button>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Equity Card */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Equity</h5>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <small className="text-muted">
                    Available Margin
                  </small>
                  <h4 className="text-success fw-bold">
                    {formatMoney(funds.available)}
                  </h4>
                </div>

                <div className="col-md-6 mb-3">
                  <small className="text-muted">
                    Used Margin
                  </small>
                  <h4 className="fw-bold">
                    {formatMoney(funds.used)}
                  </h4>
                </div>
              </div>

              <hr />

              <div className="row small">
                <div className="col-md-6 mb-3">
                  <p>
                    Available Cash:{" "}
                    <strong>
                      {formatMoney(funds.cash)}
                    </strong>
                  </p>

                  <p>
                    Opening Balance:{" "}
                    <strong>
                      {formatMoney(funds.opening)}
                    </strong>
                  </p>

                  <p>
                    Payin:{" "}
                    <strong>
                      {formatMoney(funds.payin)}
                    </strong>
                  </p>

                  <p>
                    SPAN:{" "}
                    <strong>
                      {formatMoney(funds.span)}
                    </strong>
                  </p>
                </div>

                <div className="col-md-6 mb-3">
                  <p>
                    Delivery Margin:{" "}
                    <strong>
                      {formatMoney(funds.delivery)}
                    </strong>
                  </p>

                  <p>
                    Exposure:{" "}
                    <strong>
                      {formatMoney(funds.exposure)}
                    </strong>
                  </p>

                  <p>
                    Options Premium:{" "}
                    <strong>
                      {formatMoney(funds.premium)}
                    </strong>
                  </p>

                  <p>
                    Total Collateral:{" "}
                    <strong>
                      {formatMoney(
                        funds.totalCollateral
                      )}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commodity Card */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex flex-column justify-content-center text-center">
              <h5 className="fw-bold mb-3">
                Commodity Account
              </h5>

              <p className="text-muted">
                You don't have a commodity account.
              </p>

              <button className="btn btn-primary mt-2">
                Open Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;