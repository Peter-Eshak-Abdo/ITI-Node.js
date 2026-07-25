const Joi = require("joi");

const createPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  author: Joi.string().required(),
  image: Joi.string(),
});

const updatePostSchema = Joi.object({
  title: Joi.string(),
  content: Joi.string(),
  author: Joi.string(),
  image: Joi.string(),
});

module.exports = { createPostSchema, updatePostSchema };
