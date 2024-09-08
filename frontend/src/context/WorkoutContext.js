import { createContext, useReducer } from 'react'

export const WorkoutContexts = createContext()

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload
      }
    case 'CREATE_WORKOUT': 
      return {
        workouts: [action.payload, ...state.workouts]
      }
    default:
      return state
  }
}

export const WorkoutsContextProvidor = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null
  })

  return (
    <WorkoutContexts.Provider value={{...state, dispatch}}>
      { children }
    </WorkoutContexts.Provider>
  )
}