import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddWorkoutPage from "./pages/AddWorkoutPage";
import Home from "./pages/Home";
import { WorkoutContextProvider } from "./context/WorkoutContext";

function App() {
  return (
    // <WorkoutContextProvider>
    <div className="w-full">
      <div className="p-5 text-center bg-slate-200">
        <h1 className="text-2x">Exercise App</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts/add" element={<AddWorkoutPage />} />
      </Routes>
    </div>
    // </WorkoutContextProvider>
  );
}

export default App;
