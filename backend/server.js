require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");

const app = express();

// Middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes;
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // Server start
    app.listen(process.env.PORT || 8000, () => {
      console.log("Connected to DB & Listening on port 8000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
