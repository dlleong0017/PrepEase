const express = require("express")
const router = express.Router()
const User = require("../models/user")

router.post("/", async (req, res) => {
  console.log("Received registration form data:")
  console.log(req.body)

  try {
    const newUser = new User(req.body)
    await newUser.save()
    console.log("User saved to MongoDB!")
    res.send("Backend received your registration!")
  } catch (err) {
    console.error("Failed to save user:")
    console.error(err) 
    res.status(500).send("Error saving user")
  }
})

module.exports = router
