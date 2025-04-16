import ParticleBackground from "../ParticleBackground";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/user/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const result = await res.json();

      if (res.ok) {
        setMessage("✅ Identity verified. Please reset new password.");
        navigate("/reset-password", { state: { email: form.email } });
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
        <h2 style={styles.title}>🔐 Forgot Password</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input name="firstName" placeholder="First Name" style={styles.input} onChange={handleChange} required />
          <input name="lastName" placeholder="Last Name" style={styles.input} onChange={handleChange} required />
          <input name="email" placeholder="Email" type="email" style={styles.input} onChange={handleChange} required />
          <button type="submit" style={styles.button}>Verify</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
    page: {
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #3a0ca3, #4361ee, #4cc9f0)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Segoe UI, sans-serif",
        padding: "20px",
        position: "relative",
        overflow: "hidden"
      },
      card: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        padding: "45px 35px",
        borderRadius: "20px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        maxWidth: "420px",
        width: "100%",
        backdropFilter: "blur(12px)",
        animation: "fadeSlideIn 0.6s ease-out"
      },
      

  title: {
    fontSize: "1.8rem",
    fontWeight: "700",
    marginBottom: "25px",
    textAlign: "center",
    color: "#333"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box"
  },
  button: {
    marginTop: "10px",
    padding: "14px",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(to right, #43cea2, #185a9d)",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer"
  },
  message: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "0.95rem",
    color: "#333"
  }
};

export default ForgotPassword;
