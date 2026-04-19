import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const dropdownRef = useRef();

  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  const primeBlue = "#007bff";

  // 🔹 Load user from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  // 🔹 Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const firstLetter = user?.name?.charAt(0).toUpperCase();

  // 🔹 Upload Photo
  const handlePhotoChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:5000/api/auth/upload-photo", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      const updatedUser = {
        ...user,
        profilePic: data.profilePic,
      };

      localStorage.setItem("user", JSON.stringify(updatedUser));
      setUser(updatedUser); // ✅ UI refresh without reload
    } catch (error) {
      console.log(error);
    }
  };

  // 🔹 Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null); // ✅ IMPORTANT
    setOpen(false); // dropdown band karo

    navigate("/");
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="navbar navbar-expand-lg border-bottom sticky-top bg-primary shadow-sm"
    >
      <div className="container py-1">
        {/* Logo */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          className="navbar-brand"
          href="/"
        >
          <img
            src="/media/images/logo.jpeg" // ✅ FIXED PATH
            alt="Logo"
            style={{ width: "160px", borderRadius: "8px" }}
          />
        </motion.a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto align-items-center">
            {["Home", "About", "Product", "Pricing", "Support"].map(
              (item, index) => (
                <li key={index} className="nav-item px-2">
                  <a
                    className="nav-link fw-semibold text-dark"
                    href={`/${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ),
            )}

            {/* ✅ Logged in */}
            {user ? (
              <div className="position-relative ms-3" ref={dropdownRef}>
                {/* Avatar */}
                <div
                  onClick={() => setOpen(!open)}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    color: primeBlue,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                >
                  {user?.profilePic ? (
                    <img
                      src={`http://localhost:5000/uploads/${user.profilePic}`}
                      alt="profile"
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
                  <div
                    style={{
                      position: "absolute",
                      top: "50px",
                      right: 0,
                      background: "#fff",
                      borderRadius: "10px",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                      padding: "8px 0",
                      minWidth: "180px",
                    }}
                  >
                    {[
                      {
                        label: "Dashboard",
                        action: () => navigate("/dashboard"),
                      },
                      {
                        label: "Change Password",
                        action: () => navigate("/change-password"),
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        onClick={item.action}
                        style={{
                          padding: "10px 15px",
                          cursor: "pointer",
                          transition: "0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.background = "#f5f5f5")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.background = "transparent")
                        }
                      >
                        {item.label}
                      </div>
                    ))}

                    {/* Change Photo */}
                    <label
                      style={{
                        padding: "10px 15px",
                        display: "block",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.background = "#f5f5f5")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.background = "transparent")
                      }
                    >
                      Change Photo
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handlePhotoChange}
                      />
                    </label>

                    {/* Divider */}
                    <div
                      style={{
                        height: "1px",
                        background: "#eee",
                        margin: "5px 0",
                      }}
                    />

                    {/* Logout */}
                    <div
                      onClick={handleLogout}
                      style={{
                        padding: "10px 15px",
                        cursor: "pointer",
                        color: "red",
                        fontWeight: "500",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.background = "#ffecec")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.background = "transparent")
                      }
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <li className="nav-item ms-lg-3">
                <a
                  className="nav-link btn text-white px-4"
                  style={{
                    backgroundColor: primeBlue,
                    borderRadius: "20px",
                  }}
                  href="/signup"
                >
                  Signup
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
