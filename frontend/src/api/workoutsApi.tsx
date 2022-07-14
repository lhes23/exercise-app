import { IBody } from "../interfaces/WorkoutInterfaces";

const url = "http://localhost:5000/api/workouts";

export const getAllWorkouts = async () => {
  // return await ;
  const res = await fetch(url);
  if (!res.ok) {
    return res.statusText;
  }
  const data = await res.json();
  return data.workouts;
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
