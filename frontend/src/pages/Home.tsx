import { useEffect, useState } from "react";
import { getAllWorkouts, IBodyWithId } from "../api/workoutsApi";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
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
      {/* <div className="space-y-2 col-span-full lg:col-span-1 text-center">
        <p className="font-medium">Home Page</p>
      </div> */}
      <div className="col-span-full grid md:grid-cols-2">
        <WorkoutLists workouts={workouts} />
        <WorkoutForm />
      </div>
    </div>
  );
};
export default Home;
