import { FormEvent, useState } from "react";

type Props = {};
const WorkoutForm = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [reps, setReps] = useState<number>(0);
  const [load, setLoad] = useState<number>(0);

  const submitFormHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch("http://localhost:5000/api/workouts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, reps, load }),
    });
    if (res.status > 300) {
      console.log(`error`);
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
