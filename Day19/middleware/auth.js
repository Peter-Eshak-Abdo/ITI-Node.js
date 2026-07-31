const jwt = require("jsonwebtoken");
const User = require("../model/user");
const AppError = require("../utils/AppError");

const auth = async (req, res, next) => {
  const [scheme, token] = (req.headers.authorization || "").split(" ");

  if (scheme !== "Bearer" || !token) {
    throw new AppError("Please login to access this route", 401);
  }

  const payload = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
  const user = await User.findById(payload._id);

  if (!user) throw new AppError("User not found", 401);

  req.user = user;
  next();
};

module.exports = auth;
