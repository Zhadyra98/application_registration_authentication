const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

module.exports.table_get = async (req, res) => {
    try{
        const resultTable = await User.find({}, 'id , name , email , lastLoginTime , registrationTime , isBlocked');
        res.json({ status: 'ok', table: resultTable})
    }catch(error){
        console.log(error)
        res.json({ status: 'error', error: 'invalid token'})
    }
}