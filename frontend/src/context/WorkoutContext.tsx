import { type } from "@testing-library/user-event/dist/type";
import { createContext, Dispatch, ReactNode, useReducer, Reducer } from "react";
import { IBodyWithId } from "../interfaces/WorkoutInterfaces";

type Workout = {
  _id: string;
  title: string;
  reps: number;
  load: number;
  createdAt: string;
};

type WorkoutState = typeof initialState;

type WorkoutAction =
  | { type: "GET_ALL_WORKOUTS"; payload: Workout[] }
  | { type: "ADD_WORKOUT"; payload: Workout }
  | { type: "DELETE_WORKOUT"; payload: string };

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

export const WorkoutContext = createContext<{
  state: WorkoutState;
  dispatch: Dispatch<WorkoutAction>;
}>({ state: initialState, dispatch: () => {} });

const workoutReducer = (state: WorkoutState, action: WorkoutAction) => {
  switch (action.type) {
    case "GET_ALL_WORKOUTS":
      return { workouts: action.payload };
    case "ADD_WORKOUT":
      return { workouts: [...state.workouts, action.payload] };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter((w) => w._id !== action.payload),
      };
    default:
      return state;
  }
};

/**************** */

type myState = typeof myInitState;
type myAction = { type: string; payload: number };

const myInitState = {
  count: 0,
};
const myContext = createContext<{
  state: myState;
  dispatch: Dispatch<myAction>;
}>({ state: myInitState, dispatch: () => {} });

const myReducer = (state: myState, action: myAction) => {
  switch (action.type) {
    case "SET_DATA":
      return { count: action.payload };
    default:
      return state;
  }
};

export const WorkoutContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(workoutReducer, initialState);
  // const [state, dispatch] = useReducer(myReducer,myInitState);
  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
    // <myContext.Provider value={{state,dispatch}}>
    //   {children}
    // </myContext.Provider>
  );
};
