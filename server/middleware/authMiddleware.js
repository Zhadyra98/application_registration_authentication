const jwt = require ('jsonwebtoken')
const User = require('../models/user.model')

const requireAuth = async (req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1]


            const decoded = jwt.verify(token, 'secret for jwt')

            req.user = await User.findById(decoded.id).select('-password')
        
            next();
        } catch (error) {
            console.log(error);
            res.status(401)
        }
    }
    if(!token) {
        res.status(401)
        
    }

}

module.exports = { requireAuth };