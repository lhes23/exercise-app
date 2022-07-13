import { Link } from "react-router-dom";
import { getAllWorkouts, IBodyWithId, IWorkouts } from "../api/workoutsApi";
import WorkoutDetails from "./WorkoutDetails";

const WorkoutLists = ({ workouts }: IWorkouts) => {
  return (
    <div className="">
      {workouts?.map((workout: IBodyWithId) => (
        <div key={workout._id}>
          <WorkoutDetails workout={workout} />
        </div>
      ))}
    </div>
  );
};
export default WorkoutLists;
