const express = require("express");
const { createWorkout } = require("../controllers/workoutController");
const Workout = require("../models/workoutModel");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single workout" });
});

// POST a new workout
router.post("/", createWorkout);

// DELETE a new workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a new workout" });
});

// UPDATE a new workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a new workout" });
});

module.exports = router;
