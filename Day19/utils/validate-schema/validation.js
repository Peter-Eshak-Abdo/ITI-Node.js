const Joi = require("joi");

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  groupId: Joi.string().allow(null, ""),
});

const groupSchema = Joi.object({
  name: Joi.string().required(),
});

const groupManageSchema = Joi.object({
  userId: Joi.string().required(),
  action: Joi.string().valid("add", "remove").required(),
  permission: Joi.string().valid("read", "write").allow(null, ""),
});

module.exports = { postSchema, groupSchema, groupManageSchema };
