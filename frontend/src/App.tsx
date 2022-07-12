import React from "react";
import "./App.css";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutLists from "./components/WorkoutLists";

function App() {
  return (
    <div className="App">
      <h1 className="text-2xl">Hello World</h1>
      <WorkoutForm />
      <WorkoutLists />
    </div>
  );
}

export default App;
