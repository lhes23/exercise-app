import { useContext, useEffect } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutLists from "../components/WorkoutLists";
import { GetAllWorkouts } from "../api/workoutsApi";
import { WorkoutContext } from "../context/WorkoutContext";

const Home = () => {
  const { state, dispatch } = useContext(WorkoutContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetAllWorkouts();

      if (!res.ok) {
        console.log(res.statusText);
      }
      const data = await res.json();
      dispatch({ type: "GET_ALL_WORKOUTS", payload: data.workouts });
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="">
      <div className="col-span-full grid md:grid-cols-3 mx-auto justify-center">
        <WorkoutForm />
        <WorkoutLists workouts={state.workouts} />
      </div>
    </div>
  );
};
export default Home;
