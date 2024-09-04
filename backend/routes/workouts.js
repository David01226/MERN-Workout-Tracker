const express = require('express')

const { 
  getAllWorkouts,
  getSingleWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')

// instance of express router
const router = express.Router()

// routes

// GET all workouts
router.get('/', getAllWorkouts)
 
// GET a single workout
router.get('/:id', getSingleWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)


// export router to have access to the routes elsewhere
module.exports = router