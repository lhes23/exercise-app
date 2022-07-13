import { useEffect, useState } from "react";
import { getAllWorkouts, IBodyWithId } from "../api/workoutsApi";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutLists from "../components/WorkoutLists";

// export const dummy_workouts = [{ _id: "2", title: "test", reps: 30, load: 10 }];

const Home = () => {
  const [workouts, setWorkouts] = useState<IBodyWithId[]>([]);
  // const [workouts, setWorkouts] = useState<IBodyWithId[]>(dummy_workouts);
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
      <div className="col-span-full grid md:grid-cols-3 mx-auto justify-center">
        <WorkoutForm />
        <WorkoutLists workouts={workouts} />
      </div>
    </div>
  );
};
export default Home;
