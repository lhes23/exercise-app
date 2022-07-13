import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IBodyWithId, IWorkout } from "../api/workoutsApi";

const WorkoutDetails = ({ workout }: IWorkout) => {
  return (
    <>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {workout.title}
            </div>
            <p className="text-gray-700 text-base">
              <strong>Reps:</strong> <span>{workout.reps}</span>
            </p>
            <p>
              <strong>Load (kg):</strong> <span>{workout.load}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default WorkoutDetails;
