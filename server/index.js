// database : employee
// collection (table) : register

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcryt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")

// use UserModel from models folder
const UserModel = require("./models/UserModel")

// make connection between the server and mongoos
mongoose.connect("mongodb://127.0.0.1:27017/employee");

// make route for the register
app.post('/Signup', (req, res) => {
    const {fname, lname, email, password} = req.body;
    //hash password
    bcryt.hash(password, 10)
    .then(hash => {
        UserModel.create({fname, lname, email, password: hash})
        .then(user => res.json({status: "OK"}))
        .catch(err => res.json(err))
    }).catch(err => res.json(err))
})

const app = express()
app.use(express.json)
app.use(cors())
app.use(cookieParser)

app.listen(3001, () => {
    console.log("Server is Running..!")
})