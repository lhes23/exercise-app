// export interface IBody {
//   title: string;
//   reps: number;
//   load: number;
// }

export type IBody = {
  title: string;
  reps: number;
  load: number;
};

// export interface IBodyWithId extends IBody {
//   _id: string;
//   createdAt: string;
// }

export type IBodyWithId = IBody & {
  _id: string;
  createdAt: string;
};

export interface IWorkout {
  workout: IBodyWithId;
}

export interface IWorkouts {
  workouts: IBodyWithId[];
}
