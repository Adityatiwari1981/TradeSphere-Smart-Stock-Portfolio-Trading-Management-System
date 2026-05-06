import React, { useState } from "react";
import { motion } from "framer-motion";

const ChangePassword = () => {
  const primeColor = "#5E35B1";
  const accentColor = "#00E676";

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  // ✅ SAME LOGIC
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ SAME BACKEND LOGIC
  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        "http://localhost:5000/api/auth/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Password changed successfully");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      className="container-fluid min-vh-100 p-0"
      style={{ backgroundColor: "#f5f6fa" }}
    >
      <div className="row g-0 min-vh-100">
        {/* LEFT SIDE DESIGN */}
        <div
          className="col-12 col-md-7 d-flex align-items-center justify-content-center position-relative order-1 order-md-1"
          style={{
            background: "linear-gradient(135deg, #2D1566 0%, #5E35B1 100%)",
            overflow: "hidden",
            minHeight: "300px",
          }}
        >
          {/* Background Text */}
          <motion.h1
            initial={{ opacity: 0.05, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1.08 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              position: "absolute",
              fontSize: window.innerWidth < 768 ? "3rem" : "8rem",
              fontWeight: "900",
              color: "#fff",
              whiteSpace: "nowrap",
            }}
          >
            SECURITY
          </motion.h1>

          <div className="text-center text-white z-1 px-3 px-md-5">
            {/* Icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mx-auto mb-4 d-flex align-items-center justify-content-center"
              style={{
                width: "85px",
                height: "85px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.12)",
              }}
            >
              <span style={{ fontSize: "2rem" }}>🔒</span>
            </motion.div>

            <h2 className="fw-bold mb-3">Update Password</h2>

            <p
              className="opacity-75 mx-auto"
              style={{ maxWidth: "420px" }}
            >
              Keep your TradeSphere account secure with a stronger password
              and updated credentials.
            </p>

            {/* Animated Bars */}
            <div
              className="d-flex justify-content-center align-items-end gap-2 mt-4"
              style={{ height: "90px" }}
            >
              {[35, 55, 75, 45, 90, 60].map((h, i) => (
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
                    width: "10px",
                    borderRadius: "4px 4px 0 0",
                    backgroundColor:
                      i % 2 === 0
                        ? accentColor
                        : "rgba(255,255,255,0.35)",
                  }}
                />
              ))}
            </div>

            {/* Animated Line */}
            <div className="mt-4">
              <svg width="260" height="50">
                <motion.line
                  x1="0"
                  y1="25"
                  x2="260"
                  y2="25"
                  stroke={accentColor}
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="col-12 col-md-5 d-flex align-items-center justify-content-center bg-white shadow-lg order-2 order-md-2"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="my-4 p-4 p-md-0"
            style={{
              width: "95%",
              maxWidth: "390px",
            }}
          >
            {/* TITLE */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-4"
            >
              <h3
                style={{
                  color: primeColor,
                  fontWeight: "bold",
                }}
              >
                Change Password
              </h3>

              <p className="text-muted small mb-0">
                Update your account password securely.
              </p>
            </motion.div>

            {/* OLD PASSWORD */}
            <motion.div variants={itemVariants} className="mb-3">
              <label className="small fw-bold text-muted">
                OLD PASSWORD
              </label>

              <input
                type="password"
                name="oldPassword"
                placeholder="Enter old password"
                className="form-control bg-light border-0 py-2 shadow-sm"
                onChange={handleChange}
              />
            </motion.div>

            {/* NEW PASSWORD */}
            <motion.div variants={itemVariants} className="mb-4">
              <label className="small fw-bold text-muted">
                NEW PASSWORD
              </label>

              <input
                type="password"
                name="newPassword"
                placeholder="Enter new password"
                className="form-control bg-light border-0 py-2 shadow-sm"
                onChange={handleChange}
              />
            </motion.div>

            {/* BUTTON */}
            <motion.button
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                backgroundColor: "#4527A0",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              className="btn w-100 text-white fw-bold py-2 shadow"
              style={{
                backgroundColor: primeColor,
                borderRadius: "8px",
              }}
            >
              Update Password
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChangePassword;