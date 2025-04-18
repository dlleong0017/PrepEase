import React, { useState } from "react";
import logo from "../PrepEase_logo.png";
import "../LandingPage.css";
import StartPlanning from "./StartPlanning.js"; // adjust path as needed
import Home from "./Home.js";
import CreateList from "./CreateList.js";



function Dashboard() {
  const username = localStorage.getItem("username") || "Guest";
  const [activeView, setActiveView] = useState("home");

  return (
    <div className="dashboard">
      <header className="navbar">
        <div className="logo-group">
          <img src={logo} alt="PrepEase Logo" className="navbar-logo" />
          <h2 className="navbar-title">PrepEase</h2>
        </div>
        <div className="user-tag">{username}</div>
      </header>

      <div className="content">
        <aside className="sidebar">
          <h3>MENU</h3>
          <ul>
            <li onClick={() => setActiveView("home")}>Home</li>
            <li onClick={() => setActiveView("start")}>Start Planning</li>
            <li onClick={() => setActiveView("create")}>Create Your List</li>
            <li onClick={() => setActiveView("customize")}>Customize Your Kit</li>
            <li onClick={() => setActiveView("save")}>Save & Access</li>
          </ul>
        </aside>

        <main className="main-area">
          {activeView === "home" && <Home />}
          {activeView === "start" && <StartPlanning />}
          {activeView === "create" && <CreateList username={localStorage.getItem("username")} />}
          {activeView === "customize" && <p>Customize Your Kit View</p>}
          {activeView === "save" && <p>Save Your List View</p>}
        </main>
      </div>
    </div>
  );
}

// const cardData = [
//   {
//     icon: "🌀",
//     title: "Hurricane Kit",
//     description: "View and edit your hurricane preparedness list."
//   },
//   {
//     icon: "🔥",
//     title: "Wildfire Kit",
//     description: "Build your wildfire checklist tailored to your area."
//   },
//   {
//     icon: "💡",
//     title: "Power Outage Kit",
//     description: "Plan what to do when the lights go out unexpectedly."
//   }
// ];

// const styles = {
//   wrapper: {
//     minHeight: "100vh",
//     background: "radial-gradient(circle at top left, #f0f8ff, #d4f1f9, #f8f9fa)",
//     padding: "60px 20px",
//     fontFamily: "'Segoe UI', sans-serif",
//   },
//   title: {
//     fontSize: "3rem",
//     fontWeight: "800",
//     textAlign: "center",
//     marginBottom: "20px",
//     background: "linear-gradient(to right, #3a0ca3, #4cc9f0)",
//     WebkitBackgroundClip: "text",
//     WebkitTextFillColor: "transparent",
//   },
//   subtitle: {
//     fontSize: "1.2rem",
//     color: "#444",
//     textAlign: "center",
//     maxWidth: "720px",
//     margin: "0 auto 50px auto",
//     lineHeight: "1.6",
//   },
//   cardContainer: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "30px",
//     flexWrap: "wrap",
//   },
//   card: {
//     backgroundColor: "rgba(255, 255, 255, 0.85)",
//     padding: "30px 25px",
//     borderRadius: "20px",
//     width: "280px",
//     boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)",
//     backdropFilter: "blur(10px)",
//     transition: "all 0.35s ease",
//     textAlign: "center",
//     cursor: "pointer",
//   },
//   cardTitle: {
//     fontSize: "1.5rem",
//     marginBottom: "12px",
//     color: "#333",
//   },
//   cardText: {
//     fontSize: "1rem",
//     color: "#555",
//   },
//   topBar: {
//     display: "flex",
//     justifyContent: "flex-end",
//     alignItems: "center",
//     padding: "10px 20px",
//     marginBottom: "20px"
//   },
//   username: {
//     fontSize: "1rem",
//     color: "#222",
//     fontWeight: "600",
//     backgroundColor: "rgba(255, 255, 255, 0.8)",
//     padding: "8px 16px",
//     borderRadius: "20px",
//     boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
//   }  
// };

export default Dashboard;
