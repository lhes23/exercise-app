import React, { createContext } from "react";
import { IBodyWithId } from "../interfaces/WorkoutInterfaces";

interface IContextProps {
  state: IBodyWithId[];
  dispatch: ({ type }: { type: string }) => void;
}
export const WorkoutContexts = React.createContext({} as IContextProps);

export const WorkoutContextsProvider = ({ children }: any) => {
  return;
  // (
  // <WorkoutContexts.Provider value={value}>
  //   {children}
  // </WorkoutContexts.Provider>
  // );
};
