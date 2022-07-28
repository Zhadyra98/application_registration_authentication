const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'secret for jwt', {
        expiresIn: maxAge
    });
}

module.exports.register_post = async (req, res) => {
    res.cookie('newUser', false )
    console.log(req.body)
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        const token = createToken(user._id)
        console.log(token)
        res.cookie('jwt', token);
        res.json({status: 'ok'})
        res.cookie('newUser', false )
    } catch (err) {
        console.log(err)
        res.json({ status: 'error', error: 'Some error occured, duplicate email'})
    }
}

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password)
        // user.update({lastLoginTime: new Date() }, (err) => {
        //     if (err){
        //         console.log(err)
        //     }
        // });
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge*1000});
        res.status(200).json({user : user._id});
    }
    catch (err) {
        res.status(400).json({});
    }
}
