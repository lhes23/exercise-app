import WorkoutForm from "../components/WorkoutForm";

const AddWorkoutPage = () => {
  return (
    <div>
      <div className="space-y-2 col-span-full lg:col-span-1 text-center">
        <p className="font-medium">Add New Workout</p>
      </div>
      <WorkoutForm />
    </div>
  );
};
export default AddWorkoutPage;
