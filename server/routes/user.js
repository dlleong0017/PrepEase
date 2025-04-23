//User Routes
//Purpose: Helps with user routes where it is necessary to save data to a user in the databasee

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

// POST /login
// Purpose: Authenticate user with username and password
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Login attempt:", username);

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send("User not found");

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.status(401).send("Incorrect password");

    res.send("Login successful");
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).send("Internal server error");
  }
});

// POST /change-password
// Purpose: Allow users to change their password if they provide correct credentials
router.post("/change-password", async (req, res) => {
  const { username, currentPassword, newPassword, confirmPassword } = req.body;

  if (!username || !currentPassword || !newPassword || !confirmPassword) {
    return res.status(400).json({ message: "Please fill in all fields." });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ message: "New passwords do not match." });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: "Invalid username or password." });

    const match = await bcrypt.compare(currentPassword, user.password);
    if (!match) return res.status(401).json({ message: "Invalid username or password." });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.json({ message: "Password changed successfully." });
  } catch (err) {
    console.error("Change password error:", err);
    return res.status(500).json({ message: "Server error: " + err.message });
  }
});

// POST /forgot-password
// Purpose: Verify user identity before allowing password reset
router.post("/forgot-password", async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const user = await User.findOne({ firstName, lastName, email });
    if (!user) {
      return res.status(404).json({ message: "User not found or info incorrect." });
    }

    return res.json({ message: "User verified." });
  } catch (err) {
    console.error("Forgot password error:", err);
    return res.status(500).json({ message: "Server error: " + err.message });
  }
});

// POST /reset-password
// Purpose: Reset user password after verification
router.post("/reset-password", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Email not found." });

    const hashed = await bcrypt.hash(password, 10);
    user.password = hashed;
    await user.save();

    return res.json({ message: "Password updated." });
  } catch (err) {
    console.error("Reset password error:", err);
    return res.status(500).json({ message: "Server error: " + err.message });
  }
});

// POST /save-quiz
// Purpose: Save user's emergency readiness quiz data to their account
router.post("/save-quiz", async (req, res) => {
  const { username, quizData } = req.body;

  if (!username || !quizData) {
    return res.status(400).json({ message: "Missing username or quiz data" });
  }

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.emergencyQuiz = quizData;
    await user.save();

    res.status(200).json({ message: "Quiz data saved successfully" });
  } catch (error) {
    console.error("Error saving quiz data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
