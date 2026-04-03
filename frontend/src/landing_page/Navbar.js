import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  const primeBlue = "#007bff";

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar navbar-expand-lg border-bottom sticky-top bg-primary shadow-sm"
    >
      <div className="container py-1">
        {/* Logo with Hover Scale */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          className="navbar-brand d-flex align-items-center"
          href="/"
        >
          <img
            src="\media\images\logo.jpeg"
            alt="Logo"
            style={{ width: "160px", borderRadius: "8px" }}
          />
        </motion.a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {["Home", "About", "Product", "Pricing", "Support"].map(
              (item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ y: -2 }}
                  className="nav-item px-2"
                >
                  <a
                    className="nav-link fw-semibold text-dark"
                    href={`/${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </motion.li>
              ),
            )}

            {/* Highlighted Signup Button */}
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="nav-item ms-lg-3"
            >
              <a
                className="nav-link btn text-white px-4 shadow-sm"
                style={{
                  backgroundColor: primeBlue,
                  borderRadius: "20px",
                  fontSize: "14px",
                }}
                href="/signup"
              >
                Signup
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
