//Create Your List Page
//Purpose: User gets a preview of the list so that they can add items to it

import React, { useState } from "react";
import "./CreateList.css";

function CreateList({ username }) {
  const [checklist, setChecklist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    fetch(`http://localhost:3000/quiz/checklist/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setChecklist(data.checklist);
        setGenerated(true);
      })
      .catch((err) => console.error("Error fetching checklist:", err))
      .finally(() => setLoading(false));
  };

  return (
    <div className="checklist-wrapper">
      <div className="checklist-card">
        <h2>Your Emergency Checklist</h2>

        {!generated && (
          <button className="form-submit-button" onClick={handleGenerate}>
            {loading ? "Generating..." : "Generate Checklist"}
          </button>
        )}

        {generated && checklist.length > 0 && (
          <ul>
            {checklist.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CreateList;
