import { useEffect, useState } from "react";
import { getAllWorkouts, IBodyWithId } from "../api/workoutsApi";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutLists from "../components/WorkoutLists";

export const dummy_workouts = [{ _id: "2", title: "test", reps: 30, load: 10 }];

const Home = () => {
  // const [workouts, setWorkouts] = useState<IBodyWithId[]>([]);
  const [workouts, setWorkouts] = useState<IBodyWithId[]>(dummy_workouts);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllWorkouts();
      setWorkouts(data);
    };
    fetchData();
  }, [workouts]);

  return (
    <div className="">
      <h1>Home</h1>
      <div className="">
        <WorkoutLists workouts={workouts} />
        {/* {workouts?.map((workout: IBodyWithId) => (
          <div key={workout._id}>
            <WorkoutDetails workout={workout} />
          </div>
        ))} */}
      </div>
    </div>
  );
};
export default Home;
