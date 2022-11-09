const User = require("../models/userModel");

// Login user
const loginUser = async (req, res) => {
  res.json({ msg: "Login user" });
};

// Signup user
const signupUser = async (req, res) => {
  res.json({ msg: "Signup user" });
};

module.exports = { loginUser, signupUser };
