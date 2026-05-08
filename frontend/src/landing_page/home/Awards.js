import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Awards() {
  const primeColor = "#5E35B1"; // TradeSphere Purple

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        {/* LEFT SIDE: Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="col-md-6 p-4 text-center"
        >
          <img
            src="/images/largestBroker.png"
            alt="Awards and Recognition"
            className="img-fluid"
            style={{
              filter: "drop-shadow(0px 15px 30px rgba(94, 53, 177, 0.15))",
              maxHeight: "450px",
            }}
          />
        </motion.div>

        {/* RIGHT SIDE: Content Section */}
        <div className="col-md-6 p-4">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="fw-bold mb-4"
              style={{ color: "#212121", fontSize: "2.5rem" }}
            >
              The Next-Gen
              <br />
              <span style={{ color: primeColor }}>Trading Infrastructure</span>
            </h2>

            <p className="text-muted mb-4 fs-5" style={{ lineHeight: "1.7" }}>
              TradeSphere is building an institutional-grade ecosystem. We
              bridge the gap between complex global markets and retail traders
              with unmatched stability and low-latency access.
            </p>

            {/* Animated Feature Lists */}
            <motion.div
              className="row mb-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                [
                  "Derivatives & Hedging",
                  "Multi-Asset Commodities",
                  "Forex & FX Markets",
                ],
                [
                  "Equity & Primary Markets",
                  "Zero-Commission Wealth",
                  "Fixed-Income Securities",
                ],
              ].map((list, idx) => (
                <div className="col-6" key={idx}>
                  <ul className="list-unstyled">
                    {list.map((item, i) => (
                      <motion.li
                        key={i}
                        variants={itemVariants}
                        className="mb-3 d-flex align-items-center"
                        whileHover={{ x: 5, color: primeColor }}
                        style={{ cursor: "default", transition: "0.2s" }}
                      >
                        <i
                          className="bi bi-check-circle-fill me-2"
                          style={{ color: primeColor }}
                        ></i>
                        <span className="fw-medium">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* CTA Button Added */}
            <Link to="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-lg mb-5 px-4 text-white"
                style={{
                  backgroundColor: primeColor,
                  borderRadius: "8px",
                  fontSize: "1rem",
                }}
              >
                Start Trading Now <i className="bi bi-arrow-right ms-2"></i>
              </motion.button>
            </Link>

            {/* Trusted By / Press Section */}
            <div className="pt-4 border-top">
              <small
                className="text-uppercase fw-bold text-muted d-block mb-3"
                style={{ letterSpacing: "1px" }}
              >
                Recognized by industry leaders
              </small>
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.6 }}
                transition={{ delay: 0.5 }}
                src="/images/pressLogos.png"
                style={{
                  width: "100%",
                  filter: "grayscale(100%)",
                }}
                alt="Press Logos"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Awards;