import { type } from "@testing-library/user-event/dist/type";
import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { IBodyWithId } from "../interfaces/WorkoutInterfaces";

type Workout = {
  _id: string;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
};

// type WorkoutState = {
//   workouts: Workout[];
// };

type WorkoutState = typeof initialState;

const initialState = [
  {
    _id: "1",
    title: "test1",
    reps: 0,
    load: 0,
    createdAt: "",
  },
];

type WorkoutAction = { type: "GET_ALL_WORKOUTS"; payload: WorkoutState };

interface WorkoutContextProvider {
  children: ReactNode;
}

export const WorkoutContext = createContext<{
  state: WorkoutState;
  dispatch: Dispatch<WorkoutAction>;
}>({ state: initialState, dispatch: () => {} });

export const workoutReducer = (state: WorkoutState, action: WorkoutAction) => {
  switch (action.type) {
    case "GET_ALL_WORKOUTS":
      return (state = action.payload);
    default:
      return state;
  }
};

export const WorkoutContextProvider = ({
  children,
}: WorkoutContextProvider) => {
  const [state, dispatch] = useReducer(workoutReducer, initialState);
  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
