const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        lastLoginTime: { type : Date, default: new Date() },
        registrationTime: { type : Date, default: new Date()}, 
        isBlocked: { type: Boolean, default: false },
        quote: { type: String},
    },
    { collection: 'user-data' }
)

const model = mongoose.model('UserData', User)

module.exports = model