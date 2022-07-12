import { Request, Response } from "express";
import Workout from "../models/workoutModels";

export const getAllWorkouts = async (req: Request, res: Response) => {
  try {
    const workouts = await Workout.find();
    return res.status(201).json({ workouts });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

export const AddWorkout = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};

export const getWorkout = async (req: Request, res: Response) => {};

export const updateWorkout = async (req: Request, res: Response) => {};

export const deleteWorkout = async (req: Request, res: Response) => {};
