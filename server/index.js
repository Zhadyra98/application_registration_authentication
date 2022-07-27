const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const jwt = require('jsonwebtoken')
const User = require('./models/user.model')
const cookieParser = require('cookie-parser')


const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

mongoose.connect('mongodb://localhost:27017/application')
    .then(() => app.listen(1337, () => {
        console.log('Server is running on port 1337')
    }))
    .catch((err) => console.log(err))

app.use(authRoutes)


// app.get('/api/dashboard', async (req, res) => {
//     const token = req.headers['x-access-token']
//     try{
//         const decoded = jwt.verify(token, 'secret123')
//         const email = decoded.email
//         const user = await User.findOne({ email: email})

//         return res.json({ status: 'ok', quote: user.quote})
//     }catch(error){
//         console.log(error)
//         res.json({ status: 'error', error: 'invalid token'})
//     }
// })

// app.post('/api/dashboard', async (req, res) => {
//     const token = req.headers['x-access-token']
//     try{
//         const decoded = jwt.verify(token, 'secret123')
//         const email = decoded.email
//         await User.updateOne(
//             { email: email },
//             { $set: { quote: req.body.quote }}
//         )
//         return res.json({ status: 'ok'})
//     }catch(error){
//         console.log(error)
//         res.json({ status: 'error', error: 'invalid token'})
//     }
// })

app.get('/api/admin', async (req, res) => {
    // const token = req.headers['x-access-token']
    try{
        // const decoded = jwt.verify(token, 'secret123')
        // const email = decoded.email
        // const user = await User.findOne({ email: email})

        const resultTable = await User.find({}, 'id , name , email , lastLoginTime , registrationTime , isBlocked');
        return res.json({ status: 'ok', table: resultTable})
    }catch(error){
        console.log(error)
        res.json({ status: 'error', error: 'invalid token'})
    }
})