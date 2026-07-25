const AppError = require("../utils/AppError");
const User = require("../model/user");
const Post = require("../model/post");

const createPost = async (req, res, next) => {
  const { title, content, author } = req.body;
  const user = await User.findById(author);
  if (!user) {
    throw new AppError("User not found", 404);
  }
  const imagePath = req?.images?.[0] || null;
  const post = await Post.create({
    title,
    content,
    author: user._id,
    image: imagePath,
  });
  res.status(201).json({ message: "Post created successfully", post });
};

const getAllPosts = async (req, res, next) => {
  const { page = 1, limit = 10, search } = req.query;
  const query = search ? { title: { $regex: search, $options: "i" } } : {};

  const posts = await Post.find(query)
    .populate("author", "name email image")
    .limit(limit * 1)
    .skip((page - 1) * limit);

  res.status(200).json({ message: "Posts retrieved successfully", posts });
};

const getOnePost = async (req, res, next) => {
  const post = await Post.findById(req.params.id).populate(
    "author",
    "name email image",
  );
  if (!post) {
    throw new AppError("Post not found", 404);
  }
  res.status(200).json({ message: "Post retrieved successfully", post });
};

const updatePost = async (req, res, next) => {
  const body = req.body;
  const post = await Post.findByIdAndUpdate(req.params.id, body, { new: true });
  if (!post) {
    throw new AppError("Post not found", 404);
  }
  res.status(200).json({ message: "Post updated successfully", post });
};

const deletePost = async (req, res, next) => {
  const post = await Post.findByIdAndDelete(req.params.id);
  if (!post) {
    throw new AppError("Post not found", 404);
  }
  res.status(200).json({ message: "Post deleted successfully", post });
};

module.exports = {
  createPost,
  getAllPosts,
  getOnePost,
  updatePost,
  deletePost,
};
