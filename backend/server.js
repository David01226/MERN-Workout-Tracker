// dotenv package attaches environment variables to the 'process' object so we can reference them
require('dotenv').config()

const express = require('express')

// express app
const app = express()

// middleware - called everytime a request is sent to the server
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.get('/', (req, res) => {
  res.json({mssg: 'Welcome to the app'})
})

// listen for requests
app.listen(process.env.PORT, () => {
  console.log('listening on port 4000', process.env.PORT)
})