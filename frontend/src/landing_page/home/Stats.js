import React from "react";
import { motion } from "framer-motion";

function Stats() {
  const primaryColor = "#387ed1"; // Professional Blue

  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        {/* LEFT SIDE: Content with Reveal Animation */}
        <motion.div
          className="col-lg-6 px-4 px-md-5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="fw-bold mb-5 display-6" style={{ color: "#444" }}>
            Your Safety, Our Priority
          </h1>

          <div className="mb-4">
            <h2 className="fs-4 fw-semibold mb-2">
              You're the Priority always
            </h2>
            <p className="text-muted fs-6">
              We started with one goal: making trading fair for everyone. While
              others focus on profits, we focus on your experience. Our platform
              is built to handle your biggest ambitions with the security and
              care you deserve.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-4 fw-semibold mb-2">Pure Focus, No Noise</h2>
            <p className="text-muted fs-6">
              We believe trading should be serious, not a game. You won't find
              annoying ads, useless alerts, or 'addictive' features here. Just a
              clean, powerful workspace designed to help you think clearly and
              trade better.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-4 fw-semibold mb-2">
              TradeSphere One App, Every Solution
            </h2>
            <p className="text-muted fs-6">
              TradeSphere is more than just a place to buy stocks. We are
              building a complete financial home where you can manage
              everything—from daily trades to long-term wealth—all through a
              single, connected experience.
            </p>
          </div>

          <div className="mb-4">
            <h2 className="fs-4 fw-semibold mb-2">
              Smart Tools for Smart Choices
            </h2>
            <p className="text-muted fs-6">
              We don't just give you the buttons to trade; we give you the brain
              to win. With built-in safety checks and smart warnings, our
              technology helps you avoid common mistakes and stay disciplined
              with your savings.
            </p>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Image and Links */}
        <motion.div
          className="col-lg-6 px-4 px-md-5 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/ecosystem.png"
            alt="Ecosystem"
            className="img-fluid mb-4"
            style={{ width: "95%", transition: "transform 0.3s ease" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.02)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />

          <div className="d-flex justify-content-center gap-4 mt-3">
            <motion.a
              href="#"
              className="fw-medium text-decoration-none d-flex align-items-center"
              style={{ color: primaryColor }}
              whileHover={{ x: 5 }}
            >
              Explore our products
              <i className="bi bi-arrow-right-short fs-4 ms-1"></i>
            </motion.a>

            <motion.a
              href="/"
              className="fw-medium text-decoration-none d-flex align-items-center"
              style={{ color: primaryColor }}
              whileHover={{ x: 5 }}
            >
              My Sphere demo
              <i className="bi bi-arrow-right-short fs-4 ms-1"></i>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Stats;