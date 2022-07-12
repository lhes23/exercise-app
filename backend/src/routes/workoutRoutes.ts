import express from "express";
import {
  AddWorkout,
  deleteWorkout,
  getAllWorkouts,
  getWorkout,
  updateWorkout,
} from "../controllers/workoutControllers";

const router = express.Router();

router.route("/").get(getAllWorkouts).post(AddWorkout);
router.route("/:id").get(getWorkout).put(updateWorkout).delete(deleteWorkout);

export default router;
