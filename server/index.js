const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const adminTableRoutes = require('./routes/adminTableRoutes')
const User = require('./models/user.model')
const cookieParser = require('cookie-parser')

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
app.use(adminTableRoutes)
