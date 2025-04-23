import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
  
      const text = await res.text();
  
      if (res.ok) {
        localStorage.setItem("username", form.username);
        window.location.href = "/dashboard";
      } else {
        alert("Login failed: " + text);
      }
    } catch (err) {
      alert("Login failed: " + err.message);
      console.error("Login error:", err);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <p style={styles.forgot}>
            <a href="/forgot-password" style={styles.link}>Forgot password?</a>
          </p>
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #89f7fe, #66a6ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', sans-serif",
    padding: "20px",
  },
  card: {
    backgroundColor: "#ffffffee",
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
    fontWeight: "700",
    marginBottom: "30px",
    textAlign: "center",
    color: "#333",
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
    outline: "none",
    backgroundColor: "#f9f9f9",
    transition: "border 0.3s",
  },
  forgot: {
    textAlign: "right",
    marginTop: "-10px",
    marginBottom: "15px",
  },
  link: {
    color: "#007bff",
    fontSize: "0.9rem",
    textDecoration: "none",
  },
  button: {
    padding: "14px",
    fontSize: "1rem",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(to right, #43cea2, #185a9d)",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 5px 20px rgba(0,114,255,0.3)",
    transition: "background 0.3s, transform 0.2s",
  },
};

export default Login;
