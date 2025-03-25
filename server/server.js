const express = require('express')
const web = express()

web.use(express.static("public"))

web.use(express.urlencoded({extended: true}))
web.use(express.json())


web.set("view engine", "ejs")

const userRouter = require("./routes/user")

web.use("/user", userRouter)

web.listen(3000)