const express = require('express')
const router = express.Router()

router.post('/signup', (req, res)=>{
    res.send("user signup page")
})

router.post('/login', (req, res)=>{
    res.send("user login page")
})

router.get('/profile', (req, res)=>{
    res.send("user profile view page")
})

router.put('/profile/password', (req, res)=>{
    res.send("user password change page")
})

module.exports = router