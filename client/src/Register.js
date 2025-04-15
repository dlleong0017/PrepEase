import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:3000/reg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
  
      const text = await res.text();
      alert("Registration result: " + text);
    } catch (err) {
      alert("Registration failed: " + err.message);
      console.error("Fetch error:", err);
    }
  };
  
  
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.title}>Register</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" style={styles.input} onChange={handleChange} />
        <input name="lastName" placeholder="Last Name" style={styles.input} onChange={handleChange} />
        <input name="email" placeholder="Email" style={styles.input} onChange={handleChange} />
        <input name="username" placeholder="Username" style={styles.input} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" style={styles.input} onChange={handleChange} />
        <button type="submit" style={styles.button}>Register</button>
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
  button: {
    padding: "12px",
    backgroundColor: "#2979ff",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  }
};

export default Register;
