import React from "react";
import { motion } from "framer-motion";
import { FaComments, FaArrowRight } from "react-icons/fa";

function TradingCommunity() {
  const successColor = "#00A86B";

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="card border-0 shadow-sm h-100 p-4 mt-4"
      style={{
        borderRadius: "18px",
        background:
          "linear-gradient(135deg, rgba(0,168,107,0.06) 0%, #ffffff 100%)",
      }}
    >
      {/* ICON + TITLE */}
      <div className="d-flex align-items-center mb-3">
        <div
          className="me-3 d-flex align-items-center justify-content-center"
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "12px",
            backgroundColor: "rgba(0,168,107,0.12)",
          }}
        >
          <FaComments size={22} color={successColor} />
        </div>

        <h4 className="fw-bold mb-0">TradingQ&A Community</h4>
      </div>

      {/* DESCRIPTION */}
      <p
        className="text-muted mb-4"
        style={{
          lineHeight: "1.8",
          fontSize: "15px",
        }}
      >
        Don’t trade alone. Join TradeSphere's active investor forum to resolve
        queries, share strategies, and learn from experienced market
        participants.
      </p>

      {/* BUTTON */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          alert("Currently, no live session is available.");
        }}
        className="text-decoration-none fw-bold d-inline-flex align-items-center"
        style={{ color: successColor }}
      >
        Join the Discussion
        <FaArrowRight className="ms-2" />
      </a>
    </motion.div>
  );
}

export default TradingCommunity;