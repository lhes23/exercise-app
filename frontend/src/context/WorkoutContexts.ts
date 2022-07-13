import { createContext } from "react";
import { IBodyWithId } from "../interfaces/WorkoutInterfaces";

export const WorkoutContexts = createContext<IBodyWithId | null>(null);
