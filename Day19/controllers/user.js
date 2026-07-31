const AppError = require("../utils/AppError");
const User = require("../model/user");
const Post = require("../model/post");
const Group = require("../model/group");

const createAdmin = async (req, res) => {
  const user = await User.create({
    ...req.body,
    image: req.images?.[0] || null,
    role: "admin",
  });

  res.status(201).json({
    message: "Admin created successfully",
    user: user.toSafeObject(),
  });
};

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ message: "Users retrieved successfully", users });
};

const getOneUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new AppError("User not found", 404);

  res.status(200).json({ message: "User retrieved successfully", user });
};

const updateUserPutMethod = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new AppError("Please provide username, email and password", 400);
  }

  const user = await User.findById(req.params.id).select("+password");
  if (!user) throw new AppError("User not found", 404);

  user.username = username;
  user.email = email;
  user.password = password;
  if (req.body.image !== undefined) user.image = req.body.image;

  await user.save();

  res.status(200).json({
    message: "User updated successfully",
    user: user.toSafeObject(),
  });
};

const updateUserPatchMethod = async (req, res) => {
  const user = await User.findById(req.params.id).select("+password");
  if (!user) throw new AppError("User not found", 404);

  const allowedFields = ["username", "email", "password", "image"];
  for (const field of allowedFields) {
    if (req.body[field] !== undefined) user[field] = req.body[field];
  }

  await user.save();

  res.status(200).json({
    message: "User updated successfully",
    user: user.toSafeObject(),
  });
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (!user) throw new AppError("User not found", 404);

  await Promise.all([
    Post.deleteMany({ author: userId }),
    Group.updateMany(
      {},
      {
        $pull: {
          admins: userId,
          members: userId,
          allowedToPost: userId,
        },
      },
    ),
    user.deleteOne(),
  ]);

  res.status(200).json({ message: "User deleted successfully" });
};

module.exports = {
  createAdmin,
  getAllUsers,
  getOneUser,
  updateUserPutMethod,
  updateUserPatchMethod,
  deleteUser,
};
