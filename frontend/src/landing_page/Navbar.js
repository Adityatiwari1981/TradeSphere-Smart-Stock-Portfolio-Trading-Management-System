import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef();

  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(null);

  const primeBlue = "#007bff";

  // Load user safely
  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) setUser(storedUser);
    } catch (err) {
      console.error("Invalid user data in localStorage");
    }
  }, []);

  // Close dropdown on outside click + ESC key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const firstLetter = user?.name?.charAt(0)?.toUpperCase() || "U";

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setOpen(false);
    navigate("/");
  };

  // Handle profile image preview (frontend only)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const navItems = ["Home", "About", "Product", "Pricing", "Support"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm"
    >
      <div className="container py-1">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="/images/logo2.png"
            alt="Logo"
            style={{ width: "150px", borderRadius: "6px" }}
          />
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {navItems.map((item, index) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path;

              return (
                <li key={index} className="nav-item">
                  <Link
                    className={`nav-link fw-semibold ${
                      isActive ? "text-warning" : "text-white"
                    }`}
                    to={path}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}

            {/* Logged in */}
            {user ? (
              <div className="position-relative ms-3" ref={dropdownRef}>
                {/* Avatar */}
                <div
                  onClick={() => setOpen((prev) => !prev)}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#fff",
                    color: primeBlue,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                >
                  {preview || user?.profilePic ? (
                    <img
                      src={
                        preview ||
                        `http://localhost:5000/uploads/${user.profilePic}`
                      }
                      alt="profile"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    firstLetter
                  )}
                </div>

                {/* Dropdown */}
                {open && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      position: "absolute",
                      top: "110%",
                      right: 0,
                      background: "#fff",
                      borderRadius: "10px",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                      padding: "8px 0",
                      minWidth: "180px",
                      zIndex: 2000,
                    }}
                  >
                    <div
                      className="dropdown-item-custom"
                      onClick={() => {
                        navigate("/dashboard");
                        setOpen(false);
                      }}
                    >
                      Dashboard
                    </div>

                    <div
                      className="dropdown-item-custom"
                      onClick={() => {
                        navigate("/change-password");
                        setOpen(false);
                      }}
                    >
                      Change Password
                    </div>

                    <label className="dropdown-item-custom">
                      Change Photo
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>

                    <div className="dropdown-divider"></div>

                    <div
                      className="dropdown-item-custom text-danger"
                      onClick={handleLogout}
                    >
                      Logout
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <li className="nav-item ms-3">
                <Link
                  to="/signup"
                  className="btn text-white px-4"
                  style={{
                    backgroundColor: primeBlue,
                    borderRadius: "20px",
                  }}
                >
                  Signup
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
