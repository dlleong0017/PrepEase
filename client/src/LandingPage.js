import React from "react";
import { Link } from "react-router-dom";
import logo from "./PrepEase_logo.png";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-wrapper">
      {/* Nav Bar */}
      <header className="navbar">
        <div className="logo-group">
          <img src={logo} alt="PrepEase Logo" className="navbar-logo" />
          <h2 className="navbar-title">PrepEase</h2>
        </div>
      </header>

      {/* Blue Banner Section */}
      <section className="banner">
        <div className="banner-content">
          <h1>Disaster Preparedness Starts Here</h1>
          <p>
            Sign in to create personalized emergency checklists and store your supplies securely.
          </p>
        </div>
        <div className="auth-card">
          <Link to="/login" className="banner-btn primary">Sign In</Link>
          <Link to="/register" className="banner-btn link">Create Account</Link>
        </div>
      </section>

      {/* Info Tiles */}
      <section className="tiles">
        <div className="tile">
          <h3>Build Emergency Kits</h3>
          <p>Get recommended supplies based on hurricane, wildfire, or power outage scenarios.</p>
        </div>
        <div className="tile">
          <h3>Custom Checklists</h3>
          <p>Create and store checklists for you, your family, or your organization.</p>
        </div>
        <div className="tile">
          <h3>Secure Access Anywhere</h3>
          <p>Access your kits anytime — your checklist is stored securely in the cloud.</p>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
