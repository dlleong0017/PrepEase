// routes/quiz.js
const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/save-quiz", async (req, res) => {
  const { username, quizData } = req.body;

  if (!username || !quizData) {
    return res.status(400).json({ message: "Username and quiz data are required." });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found." });

    user.quizData = quizData;
    await user.save();

    res.json({ message: "Quiz data saved successfully!" });
  } catch (err) {
    console.error("Error saving quiz:", err);
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;
