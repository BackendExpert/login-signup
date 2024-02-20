const mongoos = require('mongoose')

const UserSchema = new mongoos.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: "visitor"
    }
})

const UserModel = mongoos.model("users", UserSchema)
module.exports = UserModel