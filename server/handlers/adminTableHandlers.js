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

module.exports.table_update = async (req, res) => {
    try{
        const { users, type } = req.body;
        User.updateMany({_id: { $in: users }}, 
            (type == 'block') ? {isBlocked: true} 
            : 
            {isBlocked: false} , function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Updated Docs : ", docs);
            }
        });
        res.json({ status: 'ok'})
    }catch(error){
        console.log(error)
        res.json({ status: 'error'})
    }
}

module.exports.table_delete = async (req, res) => {
    try{
        const { users } = req.body;
        User.deleteMany({ _id: { $in: users } }).then(function(){
            console.log("Data deleted"); // Success
        }).catch(function(error){
            console.log(error); // Failure
        });
        const resultTable = await User.find({}, 'id , name , email , lastLoginTime , registrationTime , isBlocked');
        res.json({ status: 'ok', table: resultTable})
    }catch(error){
        console.log(error)
        res.json({ status: 'error'})
    }
}