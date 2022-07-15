import { FormEvent, useContext, useState } from "react";
import { json } from "stream/consumers";
import { addWorkout } from "../api/workoutsApi";
import { WorkoutContext } from "../context/WorkoutContext";

const WorkoutForm = () => {
  const [title, setTitle] = useState<string>("");
  const [reps, setReps] = useState<number>(0);
  const [load, setLoad] = useState<number>(0);
  const { state, dispatch } = useContext(WorkoutContext);

  const submitFormHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await addWorkout({ title, reps, load });
    if (!res.ok) {
      console.log(res.statusText);
    }
    if (res.ok) {
      const data = await res.json();
      dispatch({ type: "ADD_WORKOUT", payload: data.workout });
      setTitle("");
      setReps(0);
      setLoad(0);
    }
  };

  return (
    <>
      <section className="p-2 dark:bg-gray-800 dark:text-gray-50">
        <form
          onSubmit={submitFormHandler}
          className="container flex flex-col mx-auto"
        >
          <fieldset className="grid grid-cols gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full">
                <label htmlFor="email" className="text-sm">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-fuchsia-400 dark:border-gray-700 dark:text-gray-900"
                  placeholder="Title"
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Reps
                </label>

                <input
                  type="number"
                  name="reps"
                  value={reps}
                  onChange={(e) => setReps(Number(e.target.value))}
                  placeholder="Repetitions"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-fuchsia-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Load
                </label>
                <input
                  type="number"
                  name="load"
                  value={load}
                  onChange={(e) => setLoad(Number(e.target.value))}
                  placeholder="Load"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-fuchsia-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  className="px-8 py-3 font-semibold rounded-full border-2 hover:bg-fuchsia-400 hover:shadow-xl"
                  value="Submit"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </>
  );
};
export default WorkoutForm;
