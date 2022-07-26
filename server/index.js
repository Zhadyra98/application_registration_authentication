const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/application')

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({status: 'ok'})
    } catch (err) {
        console.log(err)
        res.json({ status: 'error', error: 'Some error occured, duplicate email'})
    }
})

app.listen(1337, () => {
    console.log('Server is running on 1337');
})