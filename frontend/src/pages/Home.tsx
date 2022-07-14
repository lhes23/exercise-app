import { useContext, useEffect } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutLists from "../components/WorkoutLists";
import { getAllWorkouts } from "../api/workoutsApi";
import { WorkoutContext } from "../context/WorkoutContext";

const Home = () => {
  const { state: workouts, dispatch } = useContext(WorkoutContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllWorkouts();
      dispatch({ type: "GET_ALL_WORKOUTS", payload: data });
    };
    fetchData();
  }, []);

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
