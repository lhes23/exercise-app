interface IBody {
  title: string;
  reps: number;
  load: number;
}

const url = "http://localhost:5000/api/workouts";

export const addWorkout = async ({ title, reps, load }: IBody) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, reps, load }),
  });
  return res;
};
