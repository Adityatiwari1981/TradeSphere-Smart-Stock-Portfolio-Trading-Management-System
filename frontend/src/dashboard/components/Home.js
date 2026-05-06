import React, { useEffect } from "react";
import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const API = "http://localhost:5000/api";

// ✅ AUTH HEADERS
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

// ✅ CLEAR OLD DATA
// const clearData = async () => {
//   try {

//     const res = await fetch(
//       `${API}/dashboard/clear-data`,
//       {
//         headers: getAuthHeaders(),
//       }
//     );

//     const data = await res.json();

//     console.log(
//       "🗑️ Data Cleared:",
//       data
//     );

//   } catch (error) {

//     console.log(
//       "❌ Clear Error:",
//       error
//     );
//   }
// };

const Home = () => {

  useEffect(() => {

    // ✅ FETCH USER
    const fetchUser = async () => {
      try {

        const res = await fetch(
          `${API}/auth/me`,
          {
            headers: getAuthHeaders(),
          }
        );

        const data = await res.json();

        console.log(
          "✅ Logged User:",
          data
        );

      } catch (error) {

        console.log(
          "❌ User Error:",
          error
        );
      }
    };

    // ✅ ADD WATCHLIST
    const addWatchlist = async () => {
      try {

        const res = await fetch(
          `${API}/dashboard/add-watchlist`,
          {
            headers: getAuthHeaders(),
          }
        );

        const data = await res.json();

        console.log(
          "✅ Watchlist Added:",
          data
        );

      } catch (error) {

        console.log(
          "❌ Watchlist Error:",
          error
        );
      }
    };

    // ✅ ADD HOLDINGS
    const addHoldings = async () => {
      try {

        const res = await fetch(
          `${API}/dashboard/add-holdings`,
          {
            headers: getAuthHeaders(),
          }
        );

        const data = await res.json();

        console.log(
          "✅ Holdings Added:",
          data
        );

      } catch (error) {

        console.log(
          "❌ Holdings Error:",
          error
        );
      }
    };

    // ✅ RUN ALL
    const setupDashboard = async () => {

      // 🔥 CLEAR OLD DUPLICATES
      // await clearData();

      // 🔥 FETCH USER
      await fetchUser();

      // 🔥 ADD FRESH DATA
      await addWatchlist();
      await addHoldings();
    };

    setupDashboard();

  }, []);

  return (
    <div className="dashboard-page">
      <TopBar />
      <Dashboard />
    </div>
  );
};

export default Home;