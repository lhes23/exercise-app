import { createContext, ReactNode, useReducer } from "react";

type WorkoutState = {
  _id: string;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
}[];

const initialState: WorkoutState = [
  {
    _id: "1",
    title: "test1",
    reps: 0,
    load: 0,
    createdAt: "",
  },
  {
    _id: "2",
    title: "test2",
    reps: 0,
    load: 0,
    createdAt: "",
  },
];

type WorkoutAction =
  | { type: "GET_ALL_WORKOUTS" }
  | { type: "ADD_WORKOUT"; payload: WorkoutState };

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

export const WorkoutContextProvider = (
  children: JSX.Element[] | JSX.Element
) => {
  const [state, dispatch] = useReducer(workoutReducer, initialState);
  return (
    <WorkoutContext.Provider value={state}>{children}</WorkoutContext.Provider>
  );
};
