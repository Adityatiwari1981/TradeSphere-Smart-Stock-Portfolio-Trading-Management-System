import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const primeColor = "#5E35B1"; // TradeSphere Purple

  return (
    <div className="container py-5 my-5">
      <div className="row text-center align-items-center justify-content-center">
        {/* Image with Floating Animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="col-12 mb-5"
        >
          <img
            src="media/images/homeHero.png"
            alt="TradeSphere Hero"
            className="img-fluid"
            style={{
              maxWidth: "85%",
              filter: "drop-shadow(0px 20px 40px rgba(94, 53, 177, 0.15))",
            }}
          />
        </motion.div>

        {/* TextSection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="col-lg-8"
        >
          <h1
            className="display-3 fw-bold mb-3"
            style={{ color: "#212121", letterSpacing: "-1px" }}
          >
            Master the Markets with{" "}
            <span style={{ color: primeColor }}>One Unified Platform</span>
          </h1>

          <p
            className="lead text-muted mb-5 mx-auto px-md-5"
            style={{ fontSize: "1.25rem" }}
          >
            Built on next-gen architecture, TradeSphere empowers you to
            diversify your portfolio across every major asset class. Get
            exclusive market insights, zero-lag execution, and
            professional-grade security <br />
            <strong>all in the palm of your hand.</strong>.
          </p>
          <motion.a
            href="/signup"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(94, 53, 177, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-lg text-white px-5 py-3 fw-bold shadow-sm d-inline-block" // Added d-inline-block for layout
            style={{
              backgroundColor: primeColor,
              borderRadius: "50px",
              fontSize: "1.1rem",
              textDecoration: "none", // Ensures no underline
            }}
          >
            SignUp Now
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
