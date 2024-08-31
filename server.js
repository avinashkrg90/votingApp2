const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

// Import the router files
const userRoutes = require('./routes/userRoutes')
const candidateRoutes = require('./routes/candidateRoutes')

// Use the routers
app.use('/user', userRoutes)
app.use('/candidate', candidateRoutes)

app.get('/', (req, res)=>{
    res.status(404).send("This page doesn't exist. Please try other paths or visit at our help page")
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})