const AppError = require("../utils/AppError");
const asyncWrapper = require("../utils/async-wrapper");
const { readFile, writeFile } = require("../utils/file-operation");
const path = require("path")

const postFile = path.join(__dirname,"../models/posts.json");
const userFile = path.join(__dirname, "../models/users.json");

const createPost = asyncWrapper(async (req, res) => {
  const { title, content, userId } = req.body;

  if (!title || !content || !userId) {
    throw new AppError("Please provide title, content, and userId", 400);
  }

  const users = await readFile(userFile);
  const userExists = users.some((u) => u.id.toString() === userId.toString());
  if (!userExists) {
    throw new AppError("User not found", 444);
  }

  const posts = await readFile(postFile);
  const newPost = {
    id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
    title,
    content,
    userId: Number(userId),
  };

  posts.push(newPost);
  await writeFile(postFile, posts);

  res.status(201).json({ message: "Post created successfully", post: newPost });
});

const getAllPosts = asyncWrapper(async (req, res) => {
  let posts = await readFile(postFile);
  const { userId } = req.query;

  if (userId) {
    posts = posts.filter((p) => p.userId.toString() === userId);
  }

  res.status(200).json({ message: "Posts retrieved successfully", posts });
});

const getOnePost = asyncWrapper(async (req, res) => {
  const postId = req.params.id;
  const posts = await readFile(postFile);
  const post = posts.find((p) => p.id.toString() === postId);

  if (!post) {
    throw new AppError("Post not found", 404);
  }

  res.status(200).json({ message: "Post retrieved successfully", post });
});

const updatePostPutMethod = asyncWrapper(async (req, res) => {
  const postId = req.params.id;
  const { title, content, userId } = req.body;

  if (!title || !content || !userId) {
    throw new AppError("Please provide title, content, and userId", 400);
  }

  const posts = await readFile(postFile);
  const index = posts.findIndex((p) => p.id.toString() === postId);

  if (index === -1) {
    throw new AppError("Post not found", 404);
  }

  const updatedPost = {
    id: Number(postId),
    title,
    content,
    userId: Number(userId),
  };
  posts[index] = updatedPost;
  await writeFile(postFile, posts);

  res
    .status(200)
    .json({ message: "Post updated successfully", post: updatedPost });
});

const updatePostPatchMethod = asyncWrapper(async (req, res) => {
  const postId = req.params.id;
  const body = req.body;

  const posts = await readFile(postFile);
  const index = posts.findIndex((p) => p.id.toString() === postId);

  if (index === -1) {
    throw new AppError("Post not found", 404);
  }

  const updatedPost = { ...posts[index], ...body, id: Number(postId) };
  posts[index] = updatedPost;
  await writeFile(postFile, posts);

  res
    .status(200)
    .json({ message: "Post updated successfully", post: updatedPost });
});

const deletePost = asyncWrapper(async (req, res) => {
  const postId = req.params.id;
  const posts = await readFile(postFile);
  const index = posts.findIndex((p) => p.id.toString() === postId);

  if (index === -1) {
    throw new AppError("Post not found", 404);
  }

  const deletedPost = posts.splice(index, 1)[0];
  await writeFile(postFile, posts);

  res
    .status(200)
    .json({ message: "Post deleted successfully", post: deletedPost });
});

module.exports = {
  createPost,
  getAllPosts,
  getOnePost,
  updatePostPutMethod,
  updatePostPatchMethod,
  deletePost,
};
