const mongoos = require('mongoose')

const UserSchema = new mongoos.Schema({
    fname: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: "visitor"
    }
})

const UserModel = mongoos.model("register", UserSchema)
module.exports = UserModel