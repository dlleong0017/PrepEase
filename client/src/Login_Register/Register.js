import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/reg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const text = await res.text();
      setMessage("✅ " + text);
    } catch (err) {
      setMessage("❌ Registration failed: " + err.message);
      console.error("Fetch error:", err);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>🚀 Create Your Account</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input name="firstName" placeholder="First Name" style={styles.input} onChange={handleChange} required />
          <input name="lastName" placeholder="Last Name" style={styles.input} onChange={handleChange} required />
          <input name="email" placeholder="Email" type="email" style={styles.input} onChange={handleChange} required />
          <input name="username" placeholder="Username" style={styles.input} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" style={styles.input} onChange={handleChange} required />
          <button type="submit" style={styles.button}>Register</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #a1c4fd, #c2e9fb)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', sans-serif",
    padding: "20px"
  },
  card: {
    backgroundColor: "#ffffffee",
    padding: "45px",
    borderRadius: "18px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    maxWidth: "480px",
    width: "100%",
    backdropFilter: "blur(10px)"
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    marginBottom: "30px",
    textAlign: "center",
    color: "#333"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  input: {
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    backgroundColor: "#f9f9f9",
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
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(0,114,255,0.3)",
    transition: "all 0.3s ease"
  },
  message: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "0.95rem",
    color: "#333"
  }
};

export default Register;
