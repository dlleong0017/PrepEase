//App.js
//Purpose: Important for base routing

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
