//Registration
//Purpose: Creation of account with hashed password

const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.post("/", async (req, res) => {
  console.log(" Received registration form data:");
  console.log(req.body);

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user with the hashed password
    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });

    await newUser.save();
    console.log(" User saved to MongoDB!");
    res.send("Backend received your registration!");
  } catch (err) {
    console.error(" Failed to save user:", err);
    res.status(500).send("Error saving user");
  }
});

module.exports = router;
