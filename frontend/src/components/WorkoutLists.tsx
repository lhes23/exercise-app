import { IBodyWithId, IWorkouts } from "../interfaces/WorkoutInterfaces";
import WorkoutDetails from "./WorkoutDetails";

const WorkoutLists = ({ workouts }: IWorkouts) => {
  return (
    <div className="col-span-2">
      {workouts?.map((workout: IBodyWithId) => (
        <div key={workout._id}>
          <WorkoutDetails workout={workout} />
        </div>
      ))}
    </div>
  );
};
export default WorkoutLists;
