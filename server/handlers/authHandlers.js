const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'secret for jwt', {
        expiresIn: maxAge
    });
}

module.exports.register_post = async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        const token = createToken(user._id)
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge*1000});
        res.json({status: 'ok'})
    } catch (err) {
        console.log(err)
        res.json({ status: 'error', error: 'Some error occured, duplicate email'})
    }
}

module.exports.login_post = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })

    if (user) {
        const token = jwt.sign(
            {
                name: user.name,
                email: user.email
            },
            'secret123'
        )
        user.update({lastLoginTime: new Date() }, (err) => {
            if (err){
                console.log(err)
            }
        });
        return res.json({ status: 'ok', user: token})
    }else{
        return res.json({ status: 'error', user: false})
    }
}
