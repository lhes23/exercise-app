import { type } from "@testing-library/user-event/dist/type";
import { createContext, ReactNode, useReducer } from "react";
import { IBodyWithId } from "../interfaces/WorkoutInterfaces";

type Workout = {
  _id: string;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
};

type WorkoutState = {
  workouts: Workout[];
};

const initialState: WorkoutState = {
  workouts: [
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
  ],
};

type WorkoutAction = { type: "GET_ALL_WORKOUTS"; payload: WorkoutState[] };

export const WorkoutContext = createContext(initialState);

export const workoutReducer = (state: WorkoutState, action: WorkoutAction) => {
  switch (action.type) {
    case "GET_ALL_WORKOUTS":
    // return (state.workouts = action.payload);
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
