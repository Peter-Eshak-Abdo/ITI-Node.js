const Joi = require("joi");

const objectId = Joi.string().hex().length(24);

const postSchema = Joi.object({
  title: Joi.string().trim().required(),
  content: Joi.string().required(),
  groupId: objectId.allow(null, ""),
});

const updatePostSchema = Joi.object({
  title: Joi.string().trim(),
  content: Joi.string(),
}).min(1);

const groupSchema = Joi.object({
  name: Joi.string().trim().required(),
});

const groupManageSchema = Joi.object({
  userId: objectId.required(),
  action: Joi.string().valid("add", "remove").required(),
  permission: Joi.when("action", {
    is: "add",
    then: Joi.string().valid("read", "write").required(),
    otherwise: Joi.string().valid("read", "write").optional(),
  }),
});

module.exports = {
  postSchema,
  updatePostSchema,
  groupSchema,
  groupManageSchema,
};
