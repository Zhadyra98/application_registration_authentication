const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt')

const User = new mongoose.Schema(
    {
        name: { 
            type: String, 
            required: [true, 'Please enter name']
        },
        email: { 
            type: String, 
            required: [true, 'Please enter email'], 
            unique: true,
            lowercase: true,
            validate:  [isEmail, 'Please enter a valid email']
        },
        password: { 
            type: String, 
            required: [true, 'Please enter password']
        },
        lastLoginTime: { type : Date, default: new Date() },
        registrationTime: { type : Date, default: new Date()}, 
        isBlocked: { type: Boolean, default: false },
        quote: { type: String},
    },
    { collection: 'user-data' }
)

User.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
});

User.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user;
        } 
        throw Error ('incorrect password')
    }
    throw Error ('incorrect email')
}

const model = mongoose.model('UserData', User)

module.exports = model