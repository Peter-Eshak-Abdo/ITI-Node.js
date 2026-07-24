const AppError = require("../utils/AppError");
const asyncWrapper = require("../utils/async-wrapper");
const { readFile, writeFile } = require("../utils/file-operation");
const path = require("path")

const userFile = path.join(__dirname,"../models/users.json");
const postFile = path.join(__dirname,"../models/posts.json");

const createUser = asyncWrapper(async (req, res) => {
  const { name, age, email } = req.body;
  if (!name || !age || !email) {
    throw new AppError("Please provide name, age, and email", 400);
  }

  const users = await readFile(userFile);
  if (users.some((u) => u.email === email)) {
    throw new AppError("Email already exists", 400);
  }

  const newUser = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    name,
    age,
    email,
  };

  users.push(newUser);
  await writeFile(userFile, users);

  res.status(201).json({ message: "User created successfully", user: newUser });
});

const getAllUsers = asyncWrapper(async (req, res) => {
  let users = await readFile(userFile);
  const { search } = req.query;

  if (search) {
    users = users.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  res.status(200).json({ message: "Users retrieved successfully", users });
});

const getOneUser = asyncWrapper(async (req, res) => {
  const userId = req.params.id;
  const users = await readFile(userFile);
  const user = users.find((u) => u.id.toString() === userId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  res.status(200).json({ message: "User retrieved successfully", user });
});

const updateUserPutMethod = asyncWrapper(async (req, res) => {
  const userId = req.params.id;
  const { name, age, email } = req.body;

  if (!name || !age || !email) {
    throw new AppError("Please provide name, age, and email", 400);
  }

  const users = await readFile(userFile);
  const index = users.findIndex((u) => u.id.toString() === userId);

  if (index === -1) {
    throw new AppError("User not found", 404);
  }

  const updatedUser = { id: Number(userId), name, age, email };
  users[index] = updatedUser;
  await writeFile(userFile, users);

  res
    .status(200)
    .json({ message: "User updated successfully", user: updatedUser });
});

const updateUserPatchMethod = asyncWrapper(async (req, res) => {
  const userId = req.params.id;
  const body = req.body;

  const users = await readFile(userFile);
  const index = users.findIndex((u) => u.id.toString() === userId);

  if (index === -1) {
    throw new AppError("User not found", 404);
  }

  const updatedUser = { ...users[index], ...body, id: Number(userId) };
  users[index] = updatedUser;
  await writeFile(userFile, users);

  res
    .status(200)
    .json({ message: "User updated successfully", user: updatedUser });
});

const deleteUser = asyncWrapper(async (req, res) => {
  const userId = req.params.id;
  const users = await readFile(userFile);
  const index = users.findIndex((u) => u.id.toString() === userId);

  if (index === -1) {
    throw new AppError("User not found", 404);
  }

  const deletedUser = users.splice(index, 1)[0];
  await writeFile(userFile, users);

  const posts = await readFile(postFile);
  const filteredPosts = posts.filter((p) => p.userId.toString() !== userId);
  await writeFile(postFile, filteredPosts);

  res
    .status(200)
    .json({
      message: "User and associated posts deleted successfully",
      user: deletedUser,
    });
});

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  updateUserPutMethod,
  updateUserPatchMethod,
  deleteUser,
};
