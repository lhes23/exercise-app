import { useContext, useEffect, useState } from "react";
import { IBodyWithId } from "../interfaces/WorkoutInterfaces";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutLists from "../components/WorkoutLists";
import { getAllWorkouts } from "../api/workoutsApi";
import { WorkoutContext } from "../context/WorkoutContext";

const Home = () => {
  // const [workouts, setWorkouts] = useState<IBodyWithId[]>([]);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const ctx = useContext(WorkoutContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllWorkouts();
      // setWorkouts(data);
      // console.log(data);
      ctx.dispatch({ type: "GET_ALL_WORKOUTS", payload: data });
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="col-span-full grid md:grid-cols-3 mx-auto justify-center">
        <WorkoutForm />
        <WorkoutLists workouts={ctx.state} />
      </div>
    </div>
  );
};
export default Home;
