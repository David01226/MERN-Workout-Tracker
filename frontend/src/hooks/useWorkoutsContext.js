import { WorkoutContexts } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutContexts)

  if (!context) {
    throw Error('useWorkoutContext must be used inside a WorkoutContextProvider')
  }

  return context
}