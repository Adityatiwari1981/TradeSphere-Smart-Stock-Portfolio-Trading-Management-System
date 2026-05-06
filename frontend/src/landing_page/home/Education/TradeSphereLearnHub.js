import React from "react";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaChartLine,
  FaArrowRight,
  FaUniversity,
  FaShieldAlt,
  FaBullseye,
} from "react-icons/fa";

function TradeSphereLearnHub() {
  const primeColor = "#5E35B1";
  const accentColor = "#00E676";

  const modules = [
    "Stock Market Basics",
    "Technical Analysis",
    "Fundamental Analysis",
    "Risk Management",
    "Portfolio Building",
    "Trading Psychology",
  ];

  return (
    <section className="container py-5">
      {/* HEADER */}
      <div className="text-center mb-5">
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "18px",
              backgroundColor: "rgba(94,53,177,0.12)",
            }}
          >
            <FaUniversity size={28} color={primeColor} />
          </div>

          <h2 className="fw-bold">TradeSphere LearnHub</h2>

          <p
            className="text-muted mx-auto"
            style={{ maxWidth: "700px", lineHeight: "1.8" }}
          >
            Learn investing and trading the smart way with TradeSphere’s
            education platform. Built for beginners and growing investors who
            want complete stock market knowledge in a simple and practical way.
          </p>
        </motion.div>
      </div>

      {/* MAIN CONTENT */}
      <div className="row g-4">
        {/* LEFT SIDE */}
        <div className="col-lg-7">
          <motion.div
            whileHover={{ y: -4 }}
            className="card border-0 shadow-sm p-4 h-100"
            style={{ borderRadius: "18px" }}
          >
            <h4 className="fw-bold mb-4">What You Will Learn</h4>

            <div className="row g-3">
              {modules.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div
                    className="p-3 h-100"
                    style={{
                      backgroundColor: "#f8f9fa",
                      borderRadius: "12px",
                    }}
                  >
                    <FaBookOpen
                      color={primeColor}
                      className="mb-2"
                    />
                    <h6 className="fw-bold">{item}</h6>
                    <small className="text-muted">
                      Easy explanations with real market examples.
                    </small>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <a
                href="https://www.youtube.com/@TradeSphereLearnHub"
                className="btn text-white fw-bold px-4 py-2"
                style={{
                  backgroundColor: primeColor,
                  borderRadius: "10px",
                }}
              >
                Start Learning <FaArrowRight className="ms-2" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-5">
          <div className="row g-4">
            {/* WHY LEARN */}
            <div className="col-12">
              <motion.div
                whileHover={{ y: -4 }}
                className="card border-0 shadow-sm p-4"
                style={{ borderRadius: "18px" }}
              >
                <FaChartLine
                  size={28}
                  color={accentColor}
                  className="mb-3"
                />

                <h5 className="fw-bold">Why Learn Stock Market?</h5>

                <p className="text-muted mb-0">
                  Understanding the market helps you grow wealth, manage risks,
                  invest confidently, and build long-term financial freedom.
                </p>
              </motion.div>
            </div>

            {/* BENEFITS */}
            <div className="col-12">
              <motion.div
                whileHover={{ y: -4 }}
                className="card border-0 shadow-sm p-4"
                style={{ borderRadius: "18px" }}
              >
                <h5 className="fw-bold mb-3">Key Benefits</h5>

                <div className="d-flex mb-3">
                  <FaShieldAlt
                    color={primeColor}
                    className="me-3 mt-1"
                  />
                  <div>
                    <strong>Safer Investing</strong>
                    <div className="text-muted small">
                      Learn how to reduce unnecessary losses.
                    </div>
                  </div>
                </div>

                <div className="d-flex mb-3">
                  <FaBullseye
                    color={primeColor}
                    className="me-3 mt-1"
                  />
                  <div>
                    <strong>Better Decisions</strong>
                    <div className="text-muted small">
                      Use logic instead of emotions.
                    </div>
                  </div>
                </div>

                <div className="d-flex">
                  <FaChartLine
                    color={primeColor}
                    className="me-3 mt-1"
                  />
                  <div>
                    <strong>Consistent Growth</strong>
                    <div className="text-muted small">
                      Build wealth over time with discipline.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER CTA */}
      <div className="text-center mt-5">
        <p className="text-muted mb-3">
          Thousands of future investors begin here.
        </p>

        <a
          href="/signup"
          className="text-decoration-none fw-bold"
          style={{ color: primeColor }}
        >
          Join TradeSphere →
        </a>
      </div>
    </section>
  );
}

export default TradeSphereLearnHub;