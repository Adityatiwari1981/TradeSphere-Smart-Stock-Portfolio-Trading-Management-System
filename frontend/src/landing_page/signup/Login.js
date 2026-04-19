import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { handleGoogleAuth } from "../../utils/googleAuth";

function Login() {
  const navigate = useNavigate();
  const primeColor = "#5E35B1";
  const accentColor = "#00E676";

  const [loading, setLoading] = useState(false);

  // ✅ NEW STATE
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // ✅ LOGIN FUNCTION
  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login successful");

        // 👉 Home page open (as per your requirement)
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const chartPath =
    "M0,100 L20,80 L40,90 L60,50 L80,60 L100,20 L120,40 L140,10 L160,30 L180,0";

  return (
    <div
      className="container-fluid vh-100 d-flex p-0 overflow-hidden"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      {/* LEFT SIDE */}
      <div
        className="col-md-7 d-none d-md-flex position-relative align-items-center justify-content-center"
        style={{
          background: `linear-gradient(135deg, #2D1566 0%, #5E35B1 100%)`,
          overflow: "hidden",
        }}
      >
        <motion.h1
          initial={{ opacity: 0.05, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1.1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          style={{
            position: "absolute",
            fontSize: "10rem",
            fontWeight: "900",
            color: "#fff",
            whiteSpace: "nowrap",
          }}
        >
          TRADESPHERE
        </motion.h1>

        <div className="text-center text-white z-1 px-5">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="display-4 fw-bold mb-3">TradeSphere</h2>
            <p className="lead opacity-75">
              Master the Market with Real-time Intelligence.
            </p>
          </motion.div>

          <div
            className="mt-5 position-relative"
            style={{ height: "150px", width: "300px", margin: "0 auto" }}
          >
            <svg viewBox="0 0 180 100" width="100%" height="100%">
              <motion.path
                d={chartPath}
                fill="transparent"
                stroke={accentColor}
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </svg>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="badge bg-success position-absolute top-0 end-0 shadow-lg"
            >
              +12.5% ↑
            </motion.div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="col-md-5 d-flex align-items-center justify-content-center bg-white shadow-lg"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "380px", width: "90%" }}
        >
          <motion.div variants={itemVariants} className="mb-4 text-center">
            <span className="fw-bold fs-3" style={{ color: primeColor }}>
              Login to TradeSphere
            </span>
          </motion.div>

          {/* GOOGLE LOGIN */}
          <motion.button
            onClick={() => handleGoogleAuth(setLoading, navigate)}
            disabled={loading}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center mb-4 py-2"
          >
            <small className="fw-semibold">
              {loading ? "Please wait..." : "Sign in with Google"}
            </small>
          </motion.button>

          <motion.div
            variants={itemVariants}
            className="text-center text-muted mb-4 small fw-bold"
          >
            OR USE YOUR EMAIL
          </motion.div>

          {/* EMAIL */}
          <motion.div variants={itemVariants} className="mb-3">
            <label className="form-label small fw-bold text-muted">
              EMAIL ADDRESS
            </label>
            <input
              type="email"
              className="form-control py-2 bg-light border-0"
              placeholder="name@tradesphere.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </motion.div>

          {/* PASSWORD */}
          <motion.div variants={itemVariants} className="mb-4">
            <div className="d-flex justify-content-between">
              <label className="form-label small fw-bold text-muted">
                PASSWORD
              </label>
              <Link
                to="/ResetPassword"
                className="small text-decoration-none"
                style={{ color: primeColor }}
              >
                Reset?
              </Link>
            </div>
            <input
              type="password"
              className="form-control py-2 bg-light border-0"
              placeholder="Example@123"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </motion.div>

          {/* LOGIN BUTTON */}
          <motion.button
            onClick={handleLogin}
            variants={itemVariants}
            whileHover={{ scale: 1.02, backgroundColor: "#4527A0" }}
            className="btn w-100 text-white py-2 fw-bold shadow"
            style={{ backgroundColor: primeColor, borderRadius: "8px" }}
          >
            Access Dashboard
          </motion.button>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-center small text-muted"
          >
            New to the market?{" "}
            <Link
              to="/signup"
              style={{
                color: primeColor,
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Create Account
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Login;