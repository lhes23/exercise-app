import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IWorkout } from "../interfaces/WorkoutInterfaces";

const WorkoutDetails = ({ workout }: IWorkout) => {
  return (
    <>
      <div className="m-4 md:m-8">
        <div className="shadow-lg border border-gray-400 lg:border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
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
            <p>{workout.createdAt}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default WorkoutDetails;
