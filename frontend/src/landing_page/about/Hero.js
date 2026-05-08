import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="container-fluid bg-white p-0">
      {/* 1. Main Hero Section */}
      <div className="container py-5 mt-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="row p-lg-5 mt-5 mb-5 text-center"
        >
          <h1 className="display-4 fw-bold">
            We are building the future of{" "}
            <span className="text-primary">TradeSphere</span>
            <br />
            Where technology meets the Indian Market.
          </h1>
        </motion.div>

        {/* 2. Story / Origin Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="row p-lg-5 mt-5 border-top text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.1em" }}
        >
          <div className="col-md-6 p-lg-5">
            <p>
              TradeSphere was founded by a core group of{" "}
              <strong>MCA experts</strong> who saw a massive gap in the Indian
              trading landscape. While millions were entering the market, the
              technology supporting them was slow, expensive, and outdated.
            </p>
            <p>
              Our goal is simple: <strong>Zero Barriers.</strong> We've combined
              deep technical knowledge with a passion for finance to create a
              platform that is as powerful as it is simple to use.
            </p>
            <p>
              Today, TradeSphere is more than just a broker; it is a technology
              ecosystem dedicated to transparency and speed.
            </p>
          </div>
          <div className="col-md-6 p-lg-5">
            <p>
              Beyond trading, we believe in education. We are developing
              open-source initiatives to ensure that every investor understands
              the "why" behind every trade.
            </p>
            <p>
              Our <strong>Innovation Lab</strong> is constantly testing new
              AI-driven tools and high-speed data pipelines to stay ahead of the
              curve.
            </p>
            <p>
              We are a team that codes by day and trades by night. We are always
              up to something new, pushing the boundaries of what fintech can
              achieve in India.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 3. Vision Visual Section */}
      <div className="bg-light py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                src="/images/about_vision.png"
                alt="Vision"
                className="img-fluid w-75"
              />
            </div>
            <div className="col-md-6 ps-md-5">
              <h2 className="fw-bold mb-4">Our Technical Vision</h2>
              <p className="text-secondary fs-5">
                As computer application masters, we don't just use technology—we
                build it. Our vision is to deploy the most secure and responsive
                trading infrastructure in India, backed by data integrity and
                user-first logic.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="container text-center py-5 my-5 border-top"
      >
        <h3 className="fw-bold mb-3">Be part of our journey</h3>
        <p className="text-muted mb-4">
          We're always looking for brilliant minds to join our mission.
        </p>
        <button className="btn btn-primary btn-lg px-5 rounded-pill shadow">
          See Open Roles
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;