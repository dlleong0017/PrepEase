import React, { useState, useEffect } from "react";
import "./Customize.css";

function Customize() {
  const [inputValue, setInputValue] = useState("");
  const [customizations, setCustomizations] = useState([]);
  const username = localStorage.getItem("username");

  useEffect(() => {
    const fetchCustomizations = async () => {
      try {
        const res = await fetch(`http://localhost:3000/quiz/get-customizations?username=${username}`);
        const data = await res.json();
        if (res.ok && data.additionalCustomizations) {
          setCustomizations(data.additionalCustomizations);
        }
      } catch (err) {
        console.error("Error fetching customizations:", err);
      }
    };

    if (username) fetchCustomizations();
  }, [username]);

  const handleAdd = async () => {
    if (!inputValue.trim()) return;

    const updated = [...customizations, inputValue];
    setCustomizations(updated);
    setInputValue("");

    await saveCustomizations(updated);
  };

  const handleRemove = async (item) => {
    const updated = customizations.filter((val) => val !== item);
    setCustomizations(updated);
    await saveCustomizations(updated);
  };

  const saveCustomizations = async (updatedList) => {
    try {
      const res = await fetch("http://localhost:3000/quiz/save-customizations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, additionalCustomizations: updatedList }),
      });
      if (!res.ok) console.error("Failed to save customizations");
    } catch (err) {
      console.error("Error saving customizations:", err);
    }
  };

  return (
    <div className="customize-container">
      <h2>Customize Attributes</h2>
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add new attribute..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul className="customization-list">
        {customizations.map((item, index) => (
          <li key={index}>
            {item}
            <button className="delete-btn" onClick={() => handleRemove(item)}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Customize;
