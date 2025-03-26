const express = require("express")
const router = express.Router()

router.post("/", (req, res) => {
  console.log("Received registration form data:")
  console.log(req.body)

  res.send("Backend received your registration!")
})

module.exports = router
