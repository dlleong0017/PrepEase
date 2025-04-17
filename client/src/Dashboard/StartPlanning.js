import React, { useState } from "react";
import "./StartPlanning.css";

function StartPlanning() {
  const [formData, setFormData] = useState({
    disasters: [],
    medicalEquipment: "",
    medicalCondition: "",
    hygieneNeeds: "",
    homeType: "",
    floodZone: "",
    vehicleAccess: "",
    accessibility: "",
    hasPets: "",
    petTypes: [],
    petNeeds: "",
    householdSize: "",
  });

  const username = localStorage.getItem("username");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "disasters") {
      setFormData((prev) => ({
        ...prev,
        disasters: checked
          ? [...prev.disasters, value]
          : prev.disasters.filter((item) => item !== value),
      }));
    } else if (type === "checkbox" && name === "petTypes") {
      setFormData((prev) => ({
        ...prev,
        petTypes: checked
          ? [...prev.petTypes, value]
          : prev.petTypes.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Quiz:", formData);

    if (!username || username === "Guest") {
      alert("Please log in to save your quiz.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/quiz/save-quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, quizData: formData }),
      });
  
      const data = await response.json();
      console.log("Response from server:", data);
    } catch (error) {
      console.error("Submission error:", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="start-planning-form">
      <h2>Start Planning - Emergency Readiness Quiz</h2>

      <fieldset>
        <legend>What types of natural disasters are most likely in your area?</legend>
        {["Hurricanes", "Wildfires", "Earthquakes", "Floods", "Tornadoes"].map((disaster) => (
          <label key={disaster} className="form-option">
            <input
              type="checkbox"
              name="disasters"
              value={disaster}
              onChange={handleChange}
              checked={formData.disasters.includes(disaster)}
            />
            {disaster}
          </label>
        ))}
      </fieldset>

      <fieldset>
        <legend>Do you or anyone in your household have medical equipment that requires power?</legend>
        <label className="form-option"><input type="radio" name="medicalEquipment" value="Yes" onChange={handleChange} /> Yes</label>
        <label className="form-option"><input type="radio" name="medicalEquipment" value="No" onChange={handleChange} /> No</label>
      </fieldset>

      <fieldset>
        <legend>Do you have a medical condition that requires regular supplies?</legend>
        <label className="form-option"><input type="radio" name="medicalCondition" value="Yes" onChange={handleChange} /> Yes</label>
        <label className="form-option"><input type="radio" name="medicalCondition" value="No" onChange={handleChange} /> No</label>
      </fieldset>

      <fieldset>
        <legend>Do you need access to hygiene items?</legend>
        <label className="form-option"><input type="radio" name="hygieneNeeds" value="Yes" onChange={handleChange} /> Yes</label>
        <label className="form-option"><input type="radio" name="hygieneNeeds" value="No" onChange={handleChange} /> No</label>
      </fieldset>

      <fieldset>
        <legend>What type of home do you live in?</legend>
        <select name="homeType" value={formData.homeType} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Apartment">Apartment</option>
          <option value="Single Family">Single Family</option>
          <option value="Mobile Home">Mobile Home</option>
          <option value="Other">Other</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Do you live in a flood zone or evacuation zone?</legend>
        <label className="form-option"><input type="radio" name="floodZone" value="Yes" onChange={handleChange} /> Yes</label>
        <label className="form-option"><input type="radio" name="floodZone" value="No" onChange={handleChange} /> No</label>
        <label className="form-option"><input type="radio" name="floodZone" value="Not sure" onChange={handleChange} /> Not sure</label>
      </fieldset>

      <fieldset>
        <legend>Do you have access to a vehicle in an emergency?</legend>
        <select name="vehicleAccess" value={formData.vehicleAccess} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Rely on public transit">Rely on public transit</option>
          <option value="Someone else would transport me">Someone else would transport me</option>
        </select>
      </fieldset>

      <fieldset>
        <legend>Do you or someone in your home need accessible facilities?</legend>
        <label className="form-option"><input type="radio" name="accessibility" value="Yes" onChange={handleChange} /> Yes</label>
        <label className="form-option"><input type="radio" name="accessibility" value="No" onChange={handleChange} /> No</label>
      </fieldset>

      <fieldset>
        <legend>Do you have any pets?</legend>
        <label className="form-option"><input type="radio" name="hasPets" value="Yes" onChange={handleChange} /> Yes</label>
        <label className="form-option"><input type="radio" name="hasPets" value="No" onChange={handleChange} /> No</label>
      </fieldset>

      {formData.hasPets === "Yes" && (
        <>
          <fieldset>
            <legend>If yes, what kind?</legend>
            {["Dog", "Cat", "Other"].map((pet) => (
              <label key={pet} className="form-option">
                <input
                  type="checkbox"
                  name="petTypes"
                  value={pet}
                  onChange={handleChange}
                  checked={formData.petTypes.includes(pet)}
                />
                {pet}
              </label>
            ))}
          </fieldset>

          <fieldset>
            <legend>Do they require medication, special food, or carriers?</legend>
            <label className="form-option"><input type="radio" name="petNeeds" value="Yes" onChange={handleChange} /> Yes</label>
            <label className="form-option"><input type="radio" name="petNeeds" value="No" onChange={handleChange} /> No</label>
          </fieldset>
        </>
      )}

      <fieldset>
        <legend>How many people are in your household?</legend>
        <input
          type="number"
          name="householdSize"
          value={formData.householdSize}
          onChange={handleChange}
          min="1"
          max="20"
        />
      </fieldset>

      <button type="submit" className="form-submit-button">
        Submit Quiz
      </button>
    </form>
  );
}

export default StartPlanning;
