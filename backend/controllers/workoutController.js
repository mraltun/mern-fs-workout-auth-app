const Workout = require("../models/workoutModel");

// Get all workouts

// Get a single workout

// Create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete new workout

// Update new workout

module.exports = {
  createWorkout,
};
