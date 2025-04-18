import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Login_Register/Register";
import Login from "./Login_Register/Login";
import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard/Dashboard";
import ForgotPassword from "./Login_Register/ForgotPassword"; // 顶部添加
import ResetPassword from "./Login_Register/ResetPassword";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        <Route path="/reset-password" element={<ResetPassword />} />
        
      </Routes>
    </Router>
  );
}

export default App;


// 👇 Simple landing component with nothing below the buttons
// function Landing() {
//   //return <p style={styles.welcomeText}>Welcome to PrepEase! Ensure you are prepared in the event of disaster.</p>;
//   <Route path="/" element={<LandingPage />} />
// }

// const styles = {
//   app: {
//     textAlign: "center",
//     backgroundColor: "#f5f5f5",
//     minHeight: "100vh",
//     padding: "30px 20px",
//     boxSizing: "border-box",
//     overflowX: "hidden",
//   },
//   container: {
//     maxWidth: "500px",
//     margin: "0 auto",
//     padding: "20px",
//   },
//   header: {
//     fontSize: "2.5rem",
//     marginBottom: "20px",
//   },
//   toggle: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     marginBottom: "20px",
//   },
//   linkBtn: {
//     padding: "10px 20px",
//     margin: "0 10px",
//     border: "none",
//     borderRadius: "5px",
//     backgroundColor: "#007bff",
//     color: "white",
//     cursor: "pointer",
//     textDecoration: "none",
//     display: "inline-block",
//   },
//   welcomeText: {
//     fontSize: "1.1rem",
//     color: "#555",
//     marginTop: "20px",
//   },
