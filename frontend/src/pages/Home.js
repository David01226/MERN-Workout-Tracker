import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from "../components/WorkoutForm"

export default function Home() {
  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkout = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/workouts`)
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }
    fetchWorkout()
  }, [dispatch])

  const toggleWorkoutForm = () => {
    const parentElem = document.querySelector('.home')
    if (parentElem) {
      parentElem.classList.toggle('open-modal')
    }
  }

  return (
    <div className="home">
      <div className="add" onClick={toggleWorkoutForm}></div>
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
      </div>
      <WorkoutForm toggleWorkoutForm={toggleWorkoutForm}/>
    </div>
  )
}
