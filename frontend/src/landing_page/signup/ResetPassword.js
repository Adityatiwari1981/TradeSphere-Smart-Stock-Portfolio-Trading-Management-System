import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const primeColor = "#5E35B1";
  const accentColor = "#00E676";

  const navigate = useNavigate();

  // ✅ SAME BACKEND LOGIC (UNCHANGED)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("OTP sent to your email");

        localStorage.setItem("resetEmail", email);

        setIsSubmitted(true);

        setTimeout(() => {
          navigate("/ResetPasswordFlow");
        }, 1000);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="container-fluid min-vh-100 p-0"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="row g-0 min-vh-100">
        {/* LEFT SIDE DESIGN - MOBILE VISIBLE */}
        <div
          className="col-12 col-md-7 d-flex align-items-center justify-content-center position-relative order-1 order-md-1"
          style={{
            background: "linear-gradient(135deg, #2D1566 0%, #5E35B1 100%)",
            overflow: "hidden",
            minHeight: "280px",
          }}
        >
          {/* Background Text */}
          <motion.h1
            animate={{ x: [-20, 20, -20] }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{
              position: "absolute",
              fontSize: window.innerWidth < 768 ? "3rem" : "8rem",
              fontWeight: "900",
              color: "rgba(255,255,255,0.05)",
              whiteSpace: "nowrap",
            }}
          >
            RESET ACCESS
          </motion.h1>

          <div className="text-center text-white z-1 px-3 px-md-5">
            {/* Circle Icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mx-auto mb-4 d-flex align-items-center justify-content-center"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="fs-2">🔐</span>
            </motion.div>

            <h2 className="fw-bold mb-3">Recover Your Account</h2>

            <p
              className="opacity-75 mb-0 mx-auto"
              style={{ maxWidth: "420px" }}
            >
              Get back into TradeSphere securely with OTP verification and
              password reset flow.
            </p>

            {/* Progress Bars */}
            <div
              className="d-flex justify-content-center align-items-end gap-2 mt-4"
              style={{ height: "90px" }}
            >
              {[35, 55, 70, 45, 85, 60].map((h, i) => (
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
                      i % 2 === 0 ? accentColor : "rgba(255,255,255,0.4)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center bg-white order-2 order-md-2">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card border-0 shadow-lg p-4 p-md-5 my-4"
            style={{
              maxWidth: "430px",
              width: "95%",
              borderRadius: "18px",
            }}
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Heading */}
                  <div className="text-center mb-4">
                    <div
                      className="d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "65px",
                        height: "65px",
                        backgroundColor: "#EDE7F6",
                        borderRadius: "50%",
                      }}
                    >
                      <span
                        className="fw-bold fs-4"
                        style={{ color: primeColor }}
                      >
                        TS
                      </span>
                    </div>

                    <h2 className="fw-bold mb-2">Forgot Password?</h2>

                    <p className="text-muted small mb-0">
                      No worries, we'll send you reset instructions.
                    </p>
                  </div>

                  {/* FORM */}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="form-label small fw-semibold text-muted">
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control py-2 shadow-sm border-0 bg-light"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="btn w-100 text-white py-2 shadow mb-3"
                      style={{
                        backgroundColor: primeColor,
                        borderRadius: "8px",
                      }}
                    >
                      Send OTP
                    </motion.button>
                  </form>

                  {/* Back */}
                  <div className="text-center mt-3">
                    <Link
                      to="/login"
                      className="text-decoration-none small fw-bold"
                      style={{ color: primeColor }}
                    >
                      Back to log in
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-4"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="mb-3"
                    style={{ fontSize: "3rem" }}
                  >
                    ✉️
                  </motion.div>

                  <h4 className="fw-bold">Redirecting...</h4>

                  <p className="text-muted small mb-0">
                    Please wait while we verify your request.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;