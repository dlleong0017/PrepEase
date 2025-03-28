import React, { useState } from "react";
import { useNavigate } from "react-router-dom"


function Login() {
  const [form, setForm] = useState({ username: "", password: "" });

  const navigate = useNavigate()
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const text = await res.text();
      alert("Login result: " + text);
    } catch (err) {
      alert(" Login failed: " + err.message);
      console.error("Login error:", err);
    }
  };

  const handleReturn = () => {
    navigate("/") // adjust this path if your homepage is different
  }


  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Login</button>
        <button type="button" onClick={handleReturn} style={{ marginLeft: "10px" }}>Return</button>
      </form>
    </div>
  );
}

export default Login;
