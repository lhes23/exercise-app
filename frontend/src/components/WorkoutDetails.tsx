import { useContext } from "react";
import { deleteWorkout } from "../api/workoutsApi";
import { WorkoutContext } from "../context/WorkoutContext";
import { IWorkout } from "../interfaces/WorkoutInterfaces";

const WorkoutDetails = ({ workout }: IWorkout) => {
  const { dispatch } = useContext(WorkoutContext);

  const deleteHandler = async () => {
    dispatch({ type: "DELETE_WORKOUT", payload: workout._id });
    const res = await deleteWorkout(workout._id);
    if (!res.ok) {
      return console.log("there has been an error deleting");
    }
  };
  return (
    <>
      <div className="m-4 md:m-8">
        <div className="shadow-lg border border-gray-400 lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {workout.title}
            </div>
            <p className="text-gray-700 text-base">
              <strong>Reps:</strong> <span>{workout.reps}</span>
            </p>
            <p>
              <strong>Load (kg):</strong> <span>{workout.load}</span>
            </p>
            <p>{workout.createdAt}</p>
          </div>
          <div className="text-left">
            {/* <button
              className="px-8 py-3 font-semibold rounded-full border-2 hover:bg-fuchsia-400 hover:shadow-xl"
              // onClick={}
            >
              Edit
            </button> */}
            <button
              className="px-8 py-3 font-semibold rounded-full border-2 hover:bg-fuchsia-400 hover:shadow-xl"
              onClick={deleteHandler}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default WorkoutDetails;
