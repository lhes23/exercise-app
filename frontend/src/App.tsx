import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import WorkoutForm from "./components/WorkoutForm";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
      <h1 className="text-2xl">Hello World</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workouts/add" element={<WorkoutForm />} />
      </Routes>
    </div>
  );
}

export default App;
