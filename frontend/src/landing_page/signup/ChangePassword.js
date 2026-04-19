import React, { useState } from "react";
import { motion } from "framer-motion";

const ChangePassword = () => {
  const primeColor = "#5E35B1";
  const accentColor = "#00E676";

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:5000/api/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

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

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      className="container-fluid vh-100 d-flex p-0"
      style={{ backgroundColor: "#f5f6fa" }}
    >
      {/* LEFT PANEL */}
      <div
        className="col-md-7 d-none d-md-flex align-items-center justify-content-center position-relative"
        style={{
          background: "linear-gradient(135deg, #2D1566 0%, #5E35B1 100%)",
        }}
      >
        <motion.h1
          initial={{ opacity: 0.05, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1.1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
          style={{
            position: "absolute",
            fontSize: "8rem",
            fontWeight: "900",
            color: "#fff",
          }}
        >
          SECURITY
        </motion.h1>

        <div className="text-center text-white z-1 px-5">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="fw-bold">Update Password</h2>
            <p className="opacity-75">
              Keep your account secure with a strong password.
            </p>
          </motion.div>

          {/* Animated Line */}
          <div className="mt-5">
            <svg width="250" height="100">
              <motion.line
                x1="0"
                y1="50"
                x2="250"
                y2="50"
                stroke={accentColor}
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
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
          style={{ width: "90%", maxWidth: "380px" }}
        >
          {/* TITLE */}
          <motion.div variants={itemVariants} className="text-center mb-4">
            <h3 style={{ color: primeColor, fontWeight: "bold" }}>
              Change Password
            </h3>
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
              className="form-control bg-light border-0 py-2"
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
              className="form-control bg-light border-0 py-2"
              onChange={handleChange}
            />
          </motion.div>

          {/* BUTTON */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.03, backgroundColor: "#4527A0" }}
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
  );
};

export default ChangePassword;