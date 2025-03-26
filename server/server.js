// import the express framework and create instance
const express = require('express')
const web = express()

// serve static files (html, css, js, images, etc.) from the "public" folder
web.use(express.static("public"))

// middleware to allow parsing
web.use(express.urlencoded({ extended: true }))
web.use(express.json())

//middleware to allow requests from frontend
const cors = require("cors")
web.use(cors())


// set ejs as the view engine, allowing you to render .ejs templates
web.set("view engine", "ejs")

// routes
    //user route: user specific pages

    //register page
    const regRouter = require("./routes/reg")
    web.use("/reg", regRouter)

// start the server on port 3000 and listen for incoming requests
web.listen(3000)
