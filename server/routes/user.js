const express = require("express")
const router = express.Router()

router.get("/", (req,res) => {
    res.send("User List")
})

router.get("/reg", (req,res) => {
    res.render("user/regview")
})

router.post("/", (req,res) => {
    console.log(req.body.username)
    res.send("hi")
})

//dynamic routes

    //page for specific user
    .route("/:id")
        .get((req, res) => {
            res.send(`Get user with ID ${req.params.id}`)
        })
        .put((req, res) => {
            res.send(`Update user with ID ${req.params.id}`)
        })
        .delete((req, res) => {
            res.send(`Delete user with ID ${req.params.id}`)
        })
    router

module.exports = router