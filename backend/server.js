const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "Welcome the the app" });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Listening on port 4000");
});
