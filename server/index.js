const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const jwt = require('jsonwebtoken')
const User = require('./models/user.model')
const cookieParser = require('cookie-parser')
const { requireAuth } = require('./middleware/authMiddleware')

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/application')
    .then(() => app.listen(1337, () => {
        console.log('Server is running on port 1337')
    }))
    .catch((err) => console.log(err))

app.use(authRoutes)


app.get('/api/admin', requireAuth, async (req, res) => {
    try{
        const resultTable = await User.find({}, 'id , name , email , lastLoginTime , registrationTime , isBlocked');
        return res.json({ status: 'ok', table: resultTable})
    }catch(error){
        console.log(error)
        res.json({ status: 'error', error: 'invalid token'})
    }
})

app.get('/set-cookies', (req, res) => { 
    res.cookie('newUser', false )
    res.cookie('isEmploy', false ,{ maxAge:1000*60*60*24})
    res.send('success')
})

app.get('/read-cookies', (req, res) => { 
    const cookies = req.cookies;
    console.log(cookies);
    res.json(cookies)
})