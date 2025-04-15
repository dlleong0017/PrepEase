import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: ""
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!email) {
      setMessage("❌ Missing email. Please restart from Forgot Password.");
      setTimeout(() => navigate("/forgot-password"), 2000);
    }
  }, [email, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      setMessage("❌ New passwords do not match.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/user/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: form.newPassword })
      });

      const result = await res.json();

      if (res.ok) {
        setMessage("✅ Password reset. Redirecting to login...");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setMessage("❌ " + result.message);
      }
    } catch (err) {
      setMessage("❌ Server error.");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Reset Your Password 🔐</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            name="newPassword"
            type="password"
            placeholder="New Password"
            style={styles.input}
            onChange={handleChange}
            required
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm New Password"
            style={styles.input}
            onChange={handleChange}
            required
          />
          <button type="submit" style={styles.button}>Update Password</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(120deg, #89f7fe, #66a6ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', sans-serif",
    padding: "20px"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "50px",
    borderRadius: "18px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.1)",
    maxWidth: "420px",
    width: "100%",
    transition: "transform 0.3s ease-in-out",
    animation: "fadeIn 0.6s ease-in-out"
  },
  title: {
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "30px",
    textAlign: "center",
    color: "#333"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    transition: "0.3s",
    outline: "none",
    boxSizing: "border-box",
    backgroundColor: "#f9f9f9",
  },
  button: {
    padding: "14px",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(to right, #00c6ff, #0072ff)",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 5px 20px rgba(0,114,255,0.3)",
    transition: "background 0.3s, transform 0.2s",
  },
  message: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "0.95rem",
    color: "#e53935",
  }
};

export default ResetPassword;
