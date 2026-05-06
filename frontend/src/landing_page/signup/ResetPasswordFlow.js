import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

function ResetPasswordFlow() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const primeColor = "#5E35B1";
  const accentColor = "#00E676";

  useEffect(() => {
    const savedEmail = localStorage.getItem("resetEmail");

    if (savedEmail) {
      setFormData((prev) => ({ ...prev, email: savedEmail }));
      setStep(2);
    }
  }, []);

  // ✅ SAME LOGIC
  const handleSendOTP = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: formData.email }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("OTP sent");
        setStep(2);
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // ✅ SAME LOGIC
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/reset-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            otp: formData.otp,
            password: formData.password,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Password reset successful");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fadeVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <div
      className="container-fluid min-vh-100 p-0"
      style={{ background: "#f4f7fe" }}
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
            animate={{ x: [-25, 25, -25] }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{
              position: "absolute",
              fontSize: window.innerWidth < 768 ? "3rem" : "8rem",
              fontWeight: "900",
              color: "rgba(255,255,255,0.05)",
              whiteSpace: "nowrap",
            }}
          >
            SECURE RESET
          </motion.h1>

          <div className="text-center text-white z-1 px-3 px-md-5">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-4 mx-auto d-flex align-items-center justify-content-center"
              style={{
                width: "85px",
                height: "85px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.12)",
              }}
            >
              <span style={{ fontSize: "2rem" }}>🛡️</span>
            </motion.div>

            <h2 className="fw-bold mb-3">TradeSphere Security</h2>

            <p
              className="opacity-75 mx-auto"
              style={{ maxWidth: "420px" }}
            >
              Verify OTP, update password, and regain secure access to your
              trading dashboard.
            </p>

            {/* Animated Bars */}
            <div
              className="d-flex justify-content-center align-items-end gap-2 mt-4"
              style={{ height: "90px" }}
            >
              {[35, 55, 75, 50, 90, 60].map((h, i) => (
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
                        : "rgba(255,255,255,0.4)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center bg-white order-2 order-md-2">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="card border-0 shadow-lg p-4 p-md-5 my-4"
            style={{
              maxWidth: "430px",
              width: "95%",
              borderRadius: "20px",
            }}
          >
            {/* HEADER */}
            <div className="text-center mb-4">
              <h3 className="fw-bold" style={{ color: primeColor }}>
                Reset Password
              </h3>

              <div className="progress mt-3" style={{ height: "6px" }}>
                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.4 }}
                  style={{ backgroundColor: primeColor }}
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              {/* STEP 1 */}
              {step === 1 && (
                <motion.form
                  key="step1"
                  variants={fadeVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onSubmit={handleSendOTP}
                >
                  <p className="text-muted small mb-4 text-center">
                    Enter your registered email to receive OTP
                  </p>

                  <input
                    type="email"
                    required
                    placeholder="Enter Email"
                    className="form-control mb-4 py-2 bg-light border-0 shadow-sm"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                  />

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="btn w-100 text-white py-2 shadow"
                    style={{
                      backgroundColor: primeColor,
                      borderRadius: "8px",
                    }}
                  >
                    Send OTP
                  </motion.button>
                </motion.form>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  variants={fadeVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <p className="text-muted small mb-4 text-center">
                    Enter OTP sent to <b>{formData.email}</b>
                  </p>

                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="form-control mb-4 text-center fs-5 fw-bold bg-light border-0 shadow-sm"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        otp: e.target.value,
                      })
                    }
                  />

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setStep(3)}
                    className="btn w-100 text-white py-2 shadow"
                    style={{
                      backgroundColor: primeColor,
                      borderRadius: "8px",
                    }}
                  >
                    Verify OTP
                  </motion.button>
                </motion.div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <motion.form
                  key="step3"
                  variants={fadeVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onSubmit={handleResetPassword}
                >
                  <p className="text-muted small mb-4 text-center">
                    Create your new password
                  </p>

                  <input
                    type="password"
                    placeholder="New Password"
                    className="form-control mb-3 bg-light border-0 shadow-sm"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control mb-4 bg-light border-0 shadow-sm"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />

                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: "#00c853",
                    }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="btn w-100 text-white py-2 shadow"
                    style={{
                      backgroundColor: accentColor,
                      borderRadius: "8px",
                    }}
                  >
                    Update Password
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>

            {/* BACK */}
            <div className="text-center mt-4">
              <Link
                to="/login"
                className="small text-decoration-none fw-bold"
                style={{ color: primeColor }}
              >
                Back to Login
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordFlow;