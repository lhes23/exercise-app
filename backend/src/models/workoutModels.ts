import { Schema, models, model } from "mongoose";

const workoutSchema = new Schema(
  {
    title: { type: String, required: true },
    reps: { type: String, required: true },
    load: { type: String, required: true },
  },
  { timestamps: true }
);

const Workout = models?.Workout || model("Workout", workoutSchema);

export default Workout;
