import { createContext, ReactNode, useReducer } from "react";

interface WorkoutState {
  workouts: {
    _id: string;
    title: string;
    reps: number;
    load: number;
    createdAt: string;
  };
}

interface WorkoutAction {
  type: "GET_ALL_WORKOUTS" | "ADD_WORKOUT";
  payload: WorkoutState;
}

const initialState = {
  workouts: [
    {
      _id: "",
      title: "",
      reps: 0,
      load: 0,
      createdAt: "",
    },
  ],
};

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

export const WorkoutContextProvider = (children: ReactNode) => {
  // const [state, dispatch] = useReducer(workoutReducer, initialState);
  return (
    <WorkoutContext.Provider value={initialState}>
      {children}
    </WorkoutContext.Provider>
  );
};
