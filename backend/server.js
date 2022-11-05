require("dotenv").config();
const express = require("express");
const workoutRoutes = require("./routes/workouts");

const app = express();

// Middlewares
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes;
app.get("/api/workouts", workoutRoutes);

// Server start
app.listen(process.env.PORT || 8000, () => {
  console.log("Listening on port 3000");
});
