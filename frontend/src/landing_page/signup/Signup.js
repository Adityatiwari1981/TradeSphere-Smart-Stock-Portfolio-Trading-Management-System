import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { handleGoogleAuth } from "../../utils/googleAuth";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const primeColor = "#5E35B1";
  const accentColor = "#00E676";
  const bearishColor = "#FF5252";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // ✅ Signup Handler
  const handleSignup = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.firstName + " " + formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful");

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div
      className="container-fluid vh-100 d-flex p-0 overflow-hidden"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      {/* LEFT SIDE */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="col-md-5 d-flex align-items-center justify-content-center bg-white shadow-lg z-1"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "400px", width: "90%" }}
        >
          <motion.div variants={itemVariants} className="mb-4">
            <h2 className="fw-bold display-6" style={{ color: primeColor }}>
              Join TradeSphere
            </h2>
            <p className="text-muted small">
              Start your journey into the world of smart trading.
            </p>
          </motion.div>

          {/* GOOGLE */}
          <motion.button
            onClick={() => handleGoogleAuth(setLoading, navigate)}
            disabled={loading}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center mb-4 py-2 border-secondary-subtle"
          >
            <small className="fw-semibold">
              {loading ? "Please wait..." : "Sign up with Google"}
            </small>
          </motion.button>

          <motion.div
            variants={itemVariants}
            className="text-center text-muted mb-4 small fw-bold"
          >
            OR CREATE ACCOUNT WITH EMAIL
          </motion.div>

          {/* FORM */}
          <div className="row g-2 mb-3">
            <motion.div variants={itemVariants} className="col-md-6">
              <label className="form-label small fw-bold text-muted">
                FIRST NAME
              </label>
              <input
                type="text"
                className="form-control py-2 bg-light border-0"
                placeholder="firstname"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </motion.div>

            <motion.div variants={itemVariants} className="col-md-6">
              <label className="form-label small fw-bold text-muted">
                LAST NAME
              </label>
              <input
                type="text"
                className="form-control py-2 bg-light border-0"
                placeholder="lastname"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mb-3">
            <label className="form-label small fw-bold text-muted">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              className="form-control py-2 bg-light border-0"
              placeholder="example@tradesphere.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4">
            <label className="form-label small fw-bold text-muted">
              PASSWORD
            </label>
            <input
              type="password"
              className="form-control py-2 bg-light border-0"
              placeholder="Min. 8 characters"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </motion.div>

          {/* BUTTON */}
          <motion.button
            onClick={handleSignup}
            variants={itemVariants}
            whileHover={{ scale: 1.02, backgroundColor: "#4527A0" }}
            className="btn w-100 text-white py-2 fw-bold shadow"
            style={{ backgroundColor: primeColor, borderRadius: "8px" }}
          >
            Create Free Account
          </motion.button>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-center small text-muted"
          >
            Already a trader?{" "}
            <Link
              to="/login"
              style={{
                color: primeColor,
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Log in here
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE (UNCHANGED UI) */}
      <div
        className="col-md-7 d-none d-md-flex position-relative align-items-center justify-content-center"
        style={{
          background: `linear-gradient(135deg, #1A237E 0%, #311B92 100%)`,
          overflow: "hidden",
        }}
      >
        <motion.h1
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            position: "absolute",
            fontSize: "8rem",
            fontWeight: "900",
            color: "rgba(255,255,255,0.03)",
          }}
        >
          GLOBAL MARKET
        </motion.h1>

        <div className="text-center z-1">
          <div
            className="d-flex align-items-end justify-content-center gap-2 mb-4"
            style={{ height: "120px" }}
          >
            {[40, 70, 50, 90, 60, 100, 80].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  width: "12px",
                  backgroundColor: i % 2 === 0 ? accentColor : bearishColor,
                  borderRadius: "4px 4px 0 0",
                }}
              />
            ))}
          </div>

          <div className="text-white px-5">
            <h3 className="fw-bold">Experience the Bull Run</h3>
            <p className="opacity-75">
              Trade like a pro with expert insights and lightning-fast execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;