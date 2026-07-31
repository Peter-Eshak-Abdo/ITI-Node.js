const AppError = require("../utils/AppError");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const user = await User.create(req.body);

  res.status(201).json({
    message: "User created successfully",
    user: user.toSafeObject(),
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new AppError("Email or password is incorrect", 401);
  }

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET_KEY, {
    expiresIn: process.env.TOKEN_EXPIRES_IN || "14d",
  });

  res.status(200).json({
    message: "User logged in successfully",
    user: user.toSafeObject(),
    token,
  });
};

module.exports = { signup, login };
