import { FormEvent, useState } from "react";
import { addWorkout } from "../api/workoutsApi";

const WorkoutForm = () => {
  const [title, setTitle] = useState<string>("");
  const [reps, setReps] = useState<number>(0);
  const [load, setLoad] = useState<number>(0);

  const submitFormHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await addWorkout({ title, reps, load });
    if (res.status > 300) {
      console.log(res.statusText);
    } else {
      console.log(`Success`);
      setTitle("");
      setReps(0);
      setLoad(0);
    }
  };

  return (
    <>
      <form onSubmit={submitFormHandler}>
        <div className="">
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </div>
        <div className="">
          Reps:
          <input
            type="number"
            name="reps"
            value={reps}
            onChange={(e) => setReps(Number(e.target.value))}
          />
        </div>
        <div className="">
          Load:
          <input
            type="number"
            name="load"
            value={load}
            onChange={(e) => setLoad(Number(e.target.value))}
          />
        </div>
        <div className="">
          <input type="submit" value="Submit" className="p-2 bg-red-400" />
        </div>
      </form>
    </>
  );
};
export default WorkoutForm;
