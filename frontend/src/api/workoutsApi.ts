export interface IBody {
  title: string;
  reps: number;
  load: number;
}

export interface IBodyWithId extends IBody {
  _id: string;
}

const url = "http://localhost:5000/api/workouts";

export const getAllWorkouts = async () => {
  return await fetch(url);
};

export const addWorkout = async ({ title, reps, load }: IBody) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, reps, load }),
  });
  return res;
};
