import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <Router>
      <div style={styles.app}>
        <div style={styles.container}>
          <h1 style={styles.header}>PrepEase</h1>

          <div style={styles.toggle}>
            <Link to="/register" style={styles.linkBtn}>Register</Link>
            <Link to="/login" style={styles.linkBtn}>Login</Link>
          </div>

          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// 👇 Simple landing component with nothing below the buttons
function Landing() {
  return <p style={styles.welcomeText}>Welcome to PrepEase! Ensure you are prepared in the event of disaster.</p>;
}

const styles = {
  app: {
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    padding: "30px 20px",
    boxSizing: "border-box",
    overflowX: "hidden",
  },
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
  },
  header: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  toggle: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  linkBtn: {
    padding: "10px 20px",
    margin: "0 10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
  },
  welcomeText: {
    fontSize: "1.1rem",
    color: "#555",
    marginTop: "20px",
  },
};

export default App;
