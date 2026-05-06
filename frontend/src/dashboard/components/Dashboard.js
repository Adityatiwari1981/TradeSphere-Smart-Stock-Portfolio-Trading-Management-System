import React from "react";
import { Route, Routes } from "react-router-dom";

import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import PortfolioAnalytics from "./PortfolioAnalytics";
import AdminPanel from "./AdminPanel";

import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* LEFT WATCHLIST */}
      <div className="watchlist">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
      </div>

      {/* RIGHT CONTENT */}
      <div
        className="content"
        style={{
          flex: 1,
          overflowY: "auto",
          height: "100vh",
        }}
      >
        <Routes>
          <Route index element={<Summary />} />

          <Route path="orders" element={<Orders />} />

          <Route path="holdings" element={<Holdings />} />

          <Route path="positions" element={<Positions />} />

          <Route path="analytics" element={<PortfolioAnalytics />} />

          <Route path="funds" element={<Funds />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
