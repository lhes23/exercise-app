import { useEffect, useState } from "react";
import { getAllWorkouts, IBodyWithId } from "../api/workoutsApi";

const WorkoutLists = () => {
  const [workouts, setWorkouts] = useState<IBodyWithId[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllWorkouts();
      if (res.status > 300) {
        return console.log(res.statusText);
      }
      const data = await res.json();
      //   console.log(data.workouts);
      setWorkouts(data.workouts);
    };

    fetchData();
  }, [workouts]);

  return (
    <div>
      {workouts?.map((workout) => (
        <div key={workout._id}>{workout.title}</div>
      ))}
    </div>
  );
};
export default WorkoutLists;
