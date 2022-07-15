import { IBody } from "../interfaces/WorkoutInterfaces";
import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

const url = "http://localhost:5000/api/workouts";

export const GetAllWorkouts = async () => {
  const res = await fetch(url);
  return res;
};

export const addWorkout = async ({ title, reps, load }: IBody) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, reps, load }),
  });
  return res;
};

export const deleteWorkout = async (_id: string) => {
  const res = await fetch(`${url}/${_id}`, {
    method: "DELETE",
    // headers: { "Content-Type": "application/json" },
  });
  return res;
};
