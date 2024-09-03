const mongoose = require('mongoose')
// declare schema from mongoose
const Schema = mongoose.Schema

// define new schema
const workoutSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  load: {
    type: Number,
    required: true
  }
}, { timestamps: true })

// create and export a workout model to be used elsewhere using the schema above
module.exports = mongoose.model('Workout', workoutSchema)