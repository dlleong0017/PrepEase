import React, { useState } from "react";

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
    <div className="main-area">
      <h2>Your Emergency Checklist</h2>

      {!generated && (
        <button className="form-submit-button" onClick={handleGenerate}>
          {loading ? "Generating..." : "Generate Checklist"}
        </button>
      )}

      {generated && checklist.length > 0 && (
        <ul style={{ marginTop: "20px" }}>
          {checklist.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CreateList;
