// Get the mongoose object
import mongoose from 'mongoose';

// PORT = 27017;

// Prepare to the database exercises_db in the MongoDB server running locally on port 27017
mongoose.connect(
        `mongodb://localhost:27017/exercises_db`,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Connect to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the exercise schema
 */
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, require: true},
    weight: { type: Number, require: true},
    unit: { type: String, required: true},
    date: { type: String, required: true}  // MM-DD-YY, e.g., 07-30-21.
})

/**
 * Compile the model from the schema. All fields except phoneNumber are required.
 */
const Exercise = mongoose.model("Exercise", exerciseSchema)


/**
 * Create an exercise
 */
const createExercise = async (name, reps, weight, unit, date) => {
    // Call the constructor to create an instance of the model class Exercise
    const exercise = new Exercise({ name: name, reps: reps, weight: weight, unit: unit, date: date });
    // Call save to persist the object as a document to MongoDB
    return exercise.save();
}

/**
 * Find all the exercises
 */
const findExercises = async () => {
    const query = Exercise.find()
    return query.exec();
}

/**
 * Replace an exercise, as found by its _id
 * @param id
 * @param name
 * @param reps
 * @param weight
 * @param unit
 * @param date
 * @returns {Promise}
 */
const replaceExercise = async (id, name, reps, weight, unit, date) => {
    // update the exercise
    await Exercise.replaceOne({ _id: id }, { name: name, reps: reps, weight: weight, unit: unit, date: date });
    // return the newly updated exercise JSON
    return Exercise.findById({ _id: id });
}

/**
 * Delete
 * @param id
 * @returns {Promise}
 */
const deleteExercise = async (id) => {
    // delete the exercise
    await Exercise.deleteOne({ _id: id });
}


export { createExercise, findExercises, replaceExercise, deleteExercise }