const mongoos = require('mongoose')

const UserSchema = new mongoos.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: "visitor"
    }
})