import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import WorkoutDetails from "./components/WorkoutDetails";
import WorkoutForm from "./components/WorkoutForm";
import AddWorkoutPage from "./pages/AddWorkoutPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <h1 className="text-2xl">Exercise App</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts/add" element={<AddWorkoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
