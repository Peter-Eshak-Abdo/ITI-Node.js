const AppError = require("../utils/AppError");

const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      throw new AppError(
        error.details.map((detail) => detail.message).join(", "),
        400,
      );
    }

    req.body = value;
    next();
  };
};

module.exports = validate;
