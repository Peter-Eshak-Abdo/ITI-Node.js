const Joi = require("joi");

const createAdminSchema = Joi.object({
  username: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(72).required(),
});

const replaceUserSchema = Joi.object({
  username: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(72).required(),
  image: Joi.string().uri().allow(null, ""),
});

const updateUserSchema = Joi.object({
  username: Joi.string().min(2).max(50),
  email: Joi.string().email(),
  password: Joi.string().min(8).max(72),
  image: Joi.string().uri().allow(null, ""),
}).min(1);

module.exports = {
  createAdminSchema,
  replaceUserSchema,
  updateUserSchema,
};
