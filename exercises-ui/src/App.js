import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage'
import EditExercisePage from './pages/EditExercisePage'
import Navigation from "./components/Navigation";
import { useState } from "react";

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Exercise Log</h1>
          <p>Track your workouts here!</p>
        </header>

        <Navigation/>

        <main>
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit}/>
          </Route>

          <Route path="/add-exercise">
            <AddExercisePage/>
          </Route>

          <Route path="/edit-exercise">
            <EditExercisePage exerciseToEdit={exerciseToEdit}/>
          </Route>
        </main>

        <footer>&copy; 2022 <a href="https://github.com/ljensen505">Lucas Jensen Designs</a></footer>

      </Router>

    </div>
  );
}

export default App;
