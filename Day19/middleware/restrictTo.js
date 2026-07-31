const AppError = require("../utils/AppError");

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new AppError("You are not authorized", 403);
    }
    next();
  };
};

module.exports = restrictTo;
