import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <h1>PrepEase</h1>
      <button onClick={() => setShowLogin(false)}>Register</button>
      <button onClick={() => setShowLogin(true)}>Login</button>
      <hr />
      {showLogin ? <Login /> : <Register />}
    </div>
  );
}

export default App;
