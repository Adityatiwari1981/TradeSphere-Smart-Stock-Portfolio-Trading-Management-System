import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Landing Pages
import HomePage from "./landing_page/home/HomePage";
import TradingCommunity from "./landing_page/home/Education/TradingCommunity";
import TradeSphereLearnHub from "./landing_page/home/Education/TradeSphereLearnHub";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/signup/Login";
import ChangePassword from "./landing_page/signup/ChangePassword";
import ResetPassword from "./landing_page/signup/ResetPassword";
import ResetPasswordFlow from "./landing_page/signup/ResetPasswordFlow";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";

// Dashboard
import Home from "./dashboard/components/Home";

// Layout
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

// Landing Layout
function LandingLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      {/* Landing */}
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<HomePage />} />
        <Route path="community" element={<TradingCommunity />} />
        <Route path="varsity" element={<TradeSphereLearnHub />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="resetpassword" element={<ResetPassword />} />
        <Route path="resetpasswordflow" element={<ResetPasswordFlow />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="support" element={<SupportPage />} />
        
      </Route>

      {/* Dashboard */}
      <Route path="/dashboard/*" element={<Home />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
