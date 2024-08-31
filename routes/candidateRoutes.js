const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("candidates fetching page")
})

router.post('/', (req, res)=>{
    res.send("candidate creation page")
})

router.put('/:candidateID', (req, res)=>{
    res.send("candidate updation page")
})

router.delete('/:candidateID', (req, res)=>{
    res.send("candidate deletion page")
})

router.post('/vote/:candidateID', (req, res)=>{
    res.send("polling a candidate")
})

router.get('/vote/count', (req, res)=>{
    res.send("getting candidates votes count")
})

module.exports = router

