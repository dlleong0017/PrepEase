//Handled past simple ui when gettign started

const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
    res.render("user/regview")
})

module.exports = router