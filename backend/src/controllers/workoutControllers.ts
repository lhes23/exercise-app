import { Request, Response } from "express";
import Workout from "../models/workoutModels";

export const getAllWorkouts = async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.find();
    return res.status(201).json({ workouts });
  } catch (error: any) {
    return res.status(401).json({ error: error.message });
  }
};

export const AddWorkout = async (req: Request, res: Response) => {
  try {
    const { title, reps, load } = req.body;
    const workout = await Workout.create({ title, reps, load });
    return res.status(201).json(workout);
  } catch (error: any) {
    return res.status(401).json({ error: error.message });
  }
};

export const getWorkout = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    const workout = await Workout.find({ _id });
    return res.status(201).json(workout);
  } catch (error: any) {
    return res.status(401).json({ error: error.message });
  }
};

export const updateWorkout = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    const { title, reps, load } = req.body;
    const workout = await Workout.findByIdAndUpdate(
      { _id },
      { title, reps, load }
    );
    return res.status(201).json(workout);
  } catch (error: any) {
    return res.status(401).json({ error: error.message });
  }
};

export const deleteWorkout = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    await Workout.findByIdAndDelete({ _id });
    return res
      .status(201)
      .json({ message: `Successfully Deleted Workout id : ${_id}` });
  } catch (error: any) {
    return res.status(401).json({ error: error.message });
  }
};
