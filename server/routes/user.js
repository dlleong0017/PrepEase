const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log("Login attempt:", username);

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send("Incorrect password");
    }

    res.send("Login successful");
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
