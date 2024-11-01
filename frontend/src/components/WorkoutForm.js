import React, { useState } from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

export default function WorkoutForm({ toggleWorkoutForm }) {
  const { dispatch } = useWorkoutsContext()
  const [title, setTitle] = useState("")
  const [load, setLoad] = useState("")
  const [reps, setReps] = useState("")
  const [sets, setSets] = useState("")
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, reps, load, sets}

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/workouts`, {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setTitle("")
      setLoad("")
      setReps("")
      setSets("")
      setError(null)
      setEmptyFields([])
      console.log('New workout added', json)
      dispatch({type: 'CREATE_WORKOUT', payload: json})
      toggleWorkoutForm()
      
    }

  }

  return (
    <>
      <form className="create" onSubmit={handleSubmit}>
        <div className="close" onClick={toggleWorkoutForm}>close</div>
        <h3>Add a New Exercise</h3>

        <label>Exercise Title:</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className={emptyFields.includes('title') ? 'error' : ''} />

        <label>Load (kg):</label>
        <input type="number" onChange={(e) => setLoad(e.target.value)} value={load} className={emptyFields.includes('load') ? 'error' : ''} />

        <label>Reps:</label>
        <input type="number" onChange={(e) => setReps(e.target.value)} value={reps} className={emptyFields.includes('reps') ? 'error' : ''}/>

        <label>Sets:</label>
        <input type="number" onChange={(e) => setSets(e.target.value)} value={sets} className={emptyFields.includes('sets') ? 'error' : ''}/>

        <button>Add Exercise</button>
        {error && <div className="error">{error}</div>}
        
      </form>
    </>
  )
}
