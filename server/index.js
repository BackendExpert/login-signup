// database : employee
// collection (table) : register

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcryt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")

// make connection between the server and mongoos

mongoose.connect("")

const app = express()
app.use(express.json)
app.use(cors())
app.use(cookieParser)

app.listen(3001, () => {
    console.log("Server is Running..!")
})