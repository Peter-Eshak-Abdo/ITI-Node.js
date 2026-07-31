const AppError = require("../utils/AppError");

const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern || {})[0] || "field";
    return res.status(409).json({ message: `Duplicate value for ${field}` });
  }

  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }

  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid id format" });
  }

  if (err.name === "TokenExpiredError") {
    return res.status(401).json({ message: "Token expired" });
  }

  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({ message: "Invalid token" });
  }

  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({ message: "Image is too large" });
  }

  return res.status(500).json({
    message:
      process.env.NODE_ENV === "development"
        ? err.message
        : "Internal server error",
  });
};

module.exports = errorHandler;
