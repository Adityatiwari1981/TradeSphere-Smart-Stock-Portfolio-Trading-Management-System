import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export const handleGoogleAuth = async (setLoading, navigate) => {
  try {
    setLoading(true);

    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log("Google User:", user); // 🔥 DEBUG

    // Backend call
    const res = await fetch("http://localhost:5000/api/auth/google-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.displayName,
        email: user.email,
      }),
    });

    console.log("Response status:", res.status); // 🔥 DEBUG

    const data = await res.json();
    console.log("Backend data:", data); // 🔥 DEBUG

    if (!res.ok) {
      throw new Error(data.message || "Google login failed");
    }

    // Save token & user
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    navigate("/");

  } catch (error) {
    console.error("Google Auth Error:", error); // 🔥 IMPORTANT
  } finally {
    setLoading(false);
  }
};