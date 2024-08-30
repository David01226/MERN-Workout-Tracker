// dotenv package attaches environment variables to the 'process' object so we can reference them
require('dotenv').config()
// import express package
const express = require('express')
// import routes
const workoutRoutes = require('./routes/workouts')


// init express app
const app = express()

// middleware - called everytime a request is sent to the server
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// indicate where routes are coming from when landing on url endpoint
app.use('/api/workouts', workoutRoutes)


// listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port 4000', process.env.PORT)
})