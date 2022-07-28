const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id, email) => {
    return jwt.sign({ id, email }, 'secret for jwt');
}

module.exports.register_post = async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        const token = createToken(user._id, user.email)
        res.json({ status: 'ok', token : token, name: user.name });
    } catch (err) {
        console.log(err)
        res.json({ status: 'error', error: 'Some error occured, duplicate email'})
    }
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password)
        user.updateOne({lastLoginTime: new Date() }, (err) => {
            if (err){
                console.log(err)
            }
        });
        const token = createToken(user._id, user.email)
        res.json({ status: 'ok', token : token, name: user.name });
    }
    catch (err) {
        res.status(400).json({});
    }
}
