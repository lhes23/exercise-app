import { createContext, ReactNode, useReducer } from "react";

interface WorkoutState {
  _id: string;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
}

const initialState: WorkoutState = {
  _id: "",
  title: "",
  reps: 0,
  load: 0,
  createdAt: "",
};

interface WorkoutAction {
  type: "GET_ALL_WORKOUTS" | "ADD_WORKOUT";
  payload: WorkoutState;
}

export const WorkoutContext = createContext(initialState);

export const workoutReducer = (state: WorkoutState, action: WorkoutAction) => {
  switch (action.type) {
    case "GET_ALL_WORKOUTS":
      return {
        ...state,
      };
    case "ADD_WORKOUT":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const WorkoutContextProvider = (children: ReactNode[]) => {
  const [state, dispatch] = useReducer(workoutReducer, initialState);
  return (
    <WorkoutContext.Provider value={state}>{children}</WorkoutContext.Provider>
  );
};
