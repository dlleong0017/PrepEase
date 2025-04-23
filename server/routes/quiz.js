//Quiz
//Handles operations related to quiz, handles data that is added to checklist

const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Save additional customizations
router.post("/save-customizations", async (req, res) => {
  const { username, additionalCustomizations } = req.body;
  if (!username) return res.status(400).json({ message: "Username required." });

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found." });

    user.additionalCustomizations = additionalCustomizations;
    await user.save();
    res.json({ message: "Customizations updated successfully." });
  } catch (err) {
    console.error("Error saving customizations:", err);
    res.status(500).json({ message: "Server error." });
  }
});

// Fetch additional customizations
router.get("/get-customizations", async (req, res) => {
  const { username } = req.query;
  if (!username) return res.status(400).json({ message: "Username required." });

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found." });

    res.json({ additionalCustomizations: user.additionalCustomizations || [] });
  } catch (err) {
    console.error("Error fetching customizations:", err);
    res.status(500).json({ message: "Server error." });
  }
});

router.post("/save-quiz", async (req, res) => {
  const { username, quizData } = req.body;
  console.log("Incoming quiz submission:", req.body);

  if (!username || !quizData) {
    return res.status(400).json({ message: "Username and quiz data are required." });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found." });

    user.emergencyQuiz = quizData;
    await user.save();

    console.log("Quiz saved successfully.");
    res.json({ message: "Quiz data saved successfully!" });
  } catch (err) {
    console.error("Error saving quiz:", err);
    console.error("Error saving quiz:", err);
    res.status(500).json({ message: "Server error." });
  }
});

router.get("/checklist/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user || !user.emergencyQuiz) {
      return res.status(404).json({ message: "User or quiz data not found." });
    }

    const checklist = generateChecklist(user.emergencyQuiz, user.additionalCustomizations || []);
    res.json({ checklist });
  } catch (err) {
    console.error("Error generating checklist:", err);
    res.status(500).json({ message: "Server error." });
  }
});

function generateChecklist(quiz, additionalCustomizations) {
  const items = [];

  // Base essentials
  items.push("Water (1 gallon per person per day)");
  items.push("Non-perishable food (3-day supply)");
  items.push("Flashlight and extra batteries");

  if (quiz.disasters?.includes("Hurricanes")) {
    items.push("Hurricane shutters or plywood");
    items.push("Battery-powered weather radio");
  }

  if (quiz.disasters?.includes("Wildfires")) {
    items.push("N95 masks");
    items.push("Fire extinguisher");
  }

  if (quiz.disasters?.includes("Floods")) {
    items.push("Waterproof containers for important documents");
    items.push("Rain ponchos");
  }

  if (quiz.medicalEquipment === "Yes") {
    items.push("Backup battery or generator for medical devices");
  }

  if (quiz.medicalCondition === "Yes") {
    items.push("7-day supply of medication");
    items.push("Copies of prescriptions");
  }

  if (quiz.hygieneNeeds === "Yes") {
    items.push("Hygiene products (wipes, soap, sanitizer)");
    items.push("Feminine hygiene supplies");
  }

  if (quiz.hasPets === "Yes") {
    items.push("Pet food and water");
    items.push("Pet carrier and leash");
    if (quiz.petNeeds === "Yes") {
      items.push("Pet medication and special dietary food");
    }
  }

  items.push(...additionalCustomizations);


  return items;
}

module.exports = router;