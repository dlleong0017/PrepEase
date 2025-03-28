import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div style={styles.app}>
      <h1 style={styles.header}>PrepEase</h1>
      <div style={styles.toggle}>
      	<button onClick={() => setShowLogin(false)} style={styles.toggleBtn}>
	  Register
	 </button>
      <button onClick={() => setShowLogin(true)} style = {styles.toggleBtn}>
	Login
       </button>
     </div>
      {showLogin ? <Login /> : <Register />}
    </div>
  );
}

const styles = {
  app: {
    textAlign: "center",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
    paddingTop: "30px",
  },
  header: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  toggle: {
    marginBottom: "20px",
  },
  toggleBtn: {
    padding: "10px 20px",
    margin: "0 10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
  },
};

export default App;
