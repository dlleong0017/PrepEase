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
    <div style={styles.wrapper}>
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
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <p style={styles.forgot}>
          <a href="#" style={styles.link}>Forgot password?</a>
        </p>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  title: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  },
  forgot: {
    textAlign: "right",
    marginTop: "5px",
    marginBottom: "10px",
  },
  link: {
    color: "#007bff",
    fontSize: "0.9rem",
    textDecoration: "none",
  },
  button: {
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default Login;
