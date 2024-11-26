const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const dotenv = require('dotenv')
const userdetails = require('./model/userController')
const jwt = require('jsonwebtoken')
const middleJwt = require('./middleWare')
const review = require('./model/review')

const app = express()

app.use(cors({origin:'*'}))
dotenv.config()

app.use(bodyParser.json())

const PORT = process.env.PORT || 5050

//connect to mongodb
mongoose.connect(process.env.URI)
    .then(() => {
        console.log('database connected')
    })
    .catch(err => {
        console.log('error at mongodb:', err)
    })
//regiter
app.post('/register', async (req, res) => {
    try {
        const { username, email, phone, password, confirmPassword } = req.body
        let user = await userdetails.findOne({ username })
        if (user) {
            return res.send('user already registered.')
        }
        if (password != confirmPassword) {
            return res.send('password must be match')
        }
        const newUser = new userdetails({
            username, email, phone, password, confirmPassword
        })
        await newUser.save()
        res.status(200).json(newUser)
    }
    catch (err) {
        console.log('error at registration :', err)
        res.status(500).json({ message: "erorr at registration" })
    }
})

//login
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        let exist = await userdetails.findOne({ email })
        if (!exist) {
            return res.send('user not find')
        }
        if (password != exist.password) {
            return res.send("password wrong")
        }
        let payload = {
            user: {
                id: exist.id
            }
        }
        jwt.sign(payload, "ssss", { expiresIn: 30000000 }, (err, token) => {
            if (err) throw err
            return res.json({ token })
        })
    }
    catch (err) {
        console.log('error at login :', err)
        res.status(500).json({ message: "erorr at login" })
    }

})

//get all users
app.get('/allusers', middleJwt, async (req, res) => {
    try {
        let allUser = await userdetails.find()
        return res.send(allUser)
    }
    catch (err) {
        console.log('error at login :', err)
        res.status(500).json({ message: "erorr at login" })
    }
})

//access profile
app.get('/user-single', middleJwt, async (req, res) => {
    try {
        let user = await userdetails.findById(req.user.id)
        return res.json(user)
    }
    catch (err) {
        console.log('error at single user :', err)
        res.status(500).json({ message: "erorr at single user" })
    }
})

//review
app.post('/give-review', middleJwt, async (req, res) => {
    try {
        const { taskworker, rating } = req.body
        let exist = await userdetails.findById(req.user.id)
        const giveReview = new review({
            taskprovider: exist.username,
            taskworker, rating
        })
        giveReview.save()
        return res.status(200).json(giveReview)
    }
    catch (err) {
        console.log('error at user review :', err)
        res.status(500).json({ message: "erorr at user review" })
    }
})

//all reviews
app.get('/myreview', middleJwt, async (req, res) => {
    try{
        let allreviews = await review.find()
        let userreview = allreviews.filter((r)=> r.taskworker.toString() === req.user.id.toString())
        return res.status(200).json(userreview)
    }
    catch (err) {
        console.log('error at single user review :', err)
        res.status(500).json({ message: "erorr at single user review" })
    }
})
//create server
app.listen(PORT, () => {
    console.log(`server connected at ${PORT}`)
})