const express = require("express");
require("dotenv").config();

const app = express();

// Middlewares
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes;
app.get("/", (req, res) => {
  res.json({ msg: "Welcome the the app" });
});

// Server start
app.listen(process.env.PORT || 8000, () => {
  console.log("Listening on port 3000");
});
