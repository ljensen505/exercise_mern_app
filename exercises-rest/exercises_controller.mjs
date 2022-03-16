import * as exercise from './exercises_model.mjs'
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json())


/**
 * Create a new exercise with the name, reps, weight, unit, date provided in the body
 */
app.post('/exercises', (req, res) => {
    exercise.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        })
});

/**
 * Retrieve everything. No params
 */
app.get('/exercises', (req, res) => {
    exercise.findExercises()
        .then(exercise => {
            res.send(exercise);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        })
});

/**
 * Update
 */
app.put('/exercises/:id', (req, res) => {
    exercise.replaceExercise(req.params.id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(200).json(exercise)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        })
});

/**
 * Delete
 */
app.delete('/exercises/:id', (req, res) => {
    exercise.deleteExercise(req.params.id)
        .then(exercise => {
            res.status(204).json(exercise)
        })
        .catch(error => {
            console.error(error);
            res.status(500).json(error);
        });
});


/**
 * Serve the app locally
 */
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
})