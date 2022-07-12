import { Request, Response } from "express";

export const getAllWorkouts = async (req: Request, res: Response) => {
  try {
    return res.status(201).json({ workouts: "Workouts" });
  } catch (error) {
    return res.status(401).json({ error: "Error" });
  }
};

export const AddWorkout = async (req: Request, res: Response) => {};

export const getWorkout = async (req: Request, res: Response) => {};

export const updateWorkout = async (req: Request, res: Response) => {};

export const deleteWorkout = async (req: Request, res: Response) => {};
