// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage'
import EditExercisePage from './pages/EditExercisePage'
import Navigation from "./components/Navigation";
import { useState } from "react";
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    // <div className="App">
    <Container align="center">
      <Router>
        <header className="App-header">
          <Typography variant="h3">Exercise Log</Typography>
          <Typography>Track your workouts here!</Typography>
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
        <footer>
          <Typography sx={{ mt:0.5 }}>
          &copy; 2022 <Link href="https://github.com/ljensen505">Lucas Jensen Designs</Link>
          <a ></a>
          </Typography>
        </footer>
      </Router>
    </Container>
  );
}

export default App;
