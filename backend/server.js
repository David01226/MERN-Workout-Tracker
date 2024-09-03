// dotenv package attaches environment variables to the 'process' object so we can reference them
require('dotenv').config()
// import express package
const express = require('express')
// import mongoose
const mongoose = require('mongoose')
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

// connect to database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // start listening for requests only once connected to DB
    app.listen(process.env.PORT, () => {
      console.log('connected to database & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })