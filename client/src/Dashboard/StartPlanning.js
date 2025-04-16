import React, { useState } from "react";

function StartPlanning() {
  const [quizData, setQuizData] = useState({
    location: "",
    householdSize: "",
    hasPets: false,
    hasMedicalNeeds: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setQuizData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quiz submitted:", quizData);
    // send to backend in next step
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>About You</h2>

      <label>
        Your Location:
        <select name="location" value={quizData.location} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="coastal">Coastal</option>
          <option value="urban">Urban</option>
          <option value="rural">Rural</option>
        </select>
      </label>

      <br />

      <label>
        Household Size:
        <input
          type="number"
          name="householdSize"
          value={quizData.householdSize}
          onChange={handleChange}
          min="1"
        />
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          name="hasPets"
          checked={quizData.hasPets}
          onChange={handleChange}
        />
        I have pets
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          name="hasMedicalNeeds"
          checked={quizData.hasMedicalNeeds}
          onChange={handleChange}
        />
        I have medical needs
      </label>

      <br />

      <button type="submit">Submit Quiz</button>
    </form>
  );
}

export default StartPlanning;
