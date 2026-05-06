import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const AdminPanel = () => {

  const [stats, setStats] =
    useState(null);

  useEffect(() => {

    const fetchStats =
      async () => {

        try {

          const token =
            localStorage.getItem(
              "token"
            );

          const res =
            await axios.get(
              "http://localhost:5000/api/dashboard/admin-stats",
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
            setStats(
              res.data.stats
            );
          }

        } catch (error) {

          console.log(
            "Admin Error:",
            error
          );
        }
      };

    fetchStats();

  }, []);

  if (!stats) {
    return (
      <h5 className="p-4">
        Loading Admin Panel...
      </h5>
    );
  }

  return (

    <div className="container-fluid py-4">

      <h2
        className="fw-bold mb-4"
        style={{
          color: "#5E35B1",
        }}
      >
        Admin Dashboard
      </h2>

      <div className="row g-4">

        {/* USERS */}
        <div className="col-md-3">

          <div
            className="card border-0 shadow-sm p-4"
            style={{
              borderRadius: "18px",
            }}
          >

            <h6 className="text-muted">
              Total Users
            </h6>

            <h2 className="fw-bold">
              {stats.users}
            </h2>

          </div>
        </div>

        {/* ORDERS */}
        <div className="col-md-3">

          <div
            className="card border-0 shadow-sm p-4"
            style={{
              borderRadius: "18px",
            }}
          >

            <h6 className="text-muted">
              Total Orders
            </h6>

            <h2 className="fw-bold">
              {stats.orders}
            </h2>

          </div>
        </div>

        {/* HOLDINGS */}
        <div className="col-md-3">

          <div
            className="card border-0 shadow-sm p-4"
            style={{
              borderRadius: "18px",
            }}
          >

            <h6 className="text-muted">
              Holdings
            </h6>

            <h2 className="fw-bold">
              {stats.holdings}
            </h2>

          </div>
        </div>

        {/* WATCHLIST */}
        <div className="col-md-3">

          <div
            className="card border-0 shadow-sm p-4"
            style={{
              borderRadius: "18px",
            }}
          >

            <h6 className="text-muted">
              Watchlist Stocks
            </h6>

            <h2 className="fw-bold">
              {stats.watchlist}
            </h2>

          </div>
        </div>

      </div>

    </div>
  );
};

export default AdminPanel;