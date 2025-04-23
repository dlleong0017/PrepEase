//Dashboard
//Purpose: The main page where the user can interact with different elements of the site
//User can go to
  //Home
  //Start Planning
  //Create Your List
  //Customize Your Kit
  //Save & Access

import React, { useState } from "react";
import logo from "../PrepEase_logo.png";
import "../LandingPage.css";
import StartPlanning from "./StartPlanning.js"; // adjust path as needed
import Home from "./Home.js";
import CreateList from "./CreateList.js";
import Customize from "./Customize.js";
import ExportPage from "./ExportPage.js";



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
          {activeView === "start" && <StartPlanning switchToHome={() => setActiveView("home")}/>}
          {activeView === "create" && <CreateList username={localStorage.getItem("username")} />}
          {activeView === "customize" && <Customize/>}
          {activeView === "save" && <ExportPage/>}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
