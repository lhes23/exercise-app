import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { IBodyWithId } from "../interfaces/WorkoutInterfaces";

type WorkoutState = typeof initialState;

type WorkoutAction =
  | { type: "GET_ALL_WORKOUTS"; payload: WorkoutState }
  | { type: "ADD_WORKOUT"; payload: IBodyWithId }
  | { type: "DELETE_WORKOUT"; payload: string };

const initialState: IBodyWithId[] = [
  {
    _id: "",
    title: "",
    reps: 0,
    load: 0,
    createdAt: "",
  },
];

export const WorkoutContext = createContext<{
  state: WorkoutState;
  dispatch: Dispatch<WorkoutAction>;
}>({ state: initialState, dispatch: () => {} });

export const workoutReducer = (state: WorkoutState, action: WorkoutAction) => {
  switch (action.type) {
    case "GET_ALL_WORKOUTS":
      return (state = action.payload);
    case "ADD_WORKOUT":
      return (state = [...state, action.payload]);
    case "DELETE_WORKOUT":
      return state.filter((w) => w._id !== action.payload);
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
  console.log(state);
  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
