const AppError = require("../utils/AppError");
const Post = require("../model/post");
const Group = require("../model/group");

const createPost = async (req, res, next) => {
  const { title, content, groupId } = req.body;
  const user = req.user;
  const images = req?.images || [];

  if (groupId) {
    const group = await Group.findById(groupId);
    if (!group) {
      throw new AppError("Group not found", 404);
    }
    const isSuperAdmin = user.role === "super-admin";
    const isAdmin = group.admins.includes(user._id);
    const isAllowedToPost = group.allowedToPost.includes(user._id);

    if (!isSuperAdmin && !isAdmin && !isAllowedToPost) {
      throw new AppError(
        "You do not have permission to post in this group",
        403,
      );
    }
  }

  const post = await Post.create({
    title,
    content,
    images,
    author: user._id,
    group: groupId || null,
  });

  res.status(201).json({ message: "Post created successfully", post });
};

const getAllPosts = async (req, res, next) => {
  const user = req.user;

  const userGroups = await Group.find({
    $or: [{ admins: user._id }, { members: user._id }],
  }).select("_id");

  const groupIds = userGroups.map((g) => g._id);

  const posts = await Post.find({
    $or: [{ group: null }, { group: { $in: groupIds } }],
  })
    .sort({ createdAt: -1 })
    .populate("author", "username email image")
    .populate("group", "name");

  res.status(200).json({ message: "Posts retrieved successfully", posts });
};

const getUserPosts = async (req, res, next) => {
  const userId = req.params.userId;
  const posts = await Post.find({ author: userId })
    .sort({ createdAt: -1 })
    .populate("author", "username email image");

  res.status(200).json({ message: "User posts retrieved successfully", posts });
};

const updatePost = async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findById(id);

  if (!post) throw new AppError("Post not found", 404);

  if (
    post.author.toString() !== req.user._id.toString() &&
    req.user.role !== "super-admin"
  ) {
    throw new AppError("You can only edit your own posts", 403);
  }

  const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
  res
    .status(200)
    .json({ message: "Post updated successfully", post: updatedPost });
};

const deletePost = async (req, res, next) => {
  const { id } = req.params;
  const post = await Post.findById(id);

  if (!post) throw new AppError("Post not found", 404);

  if (
    post.author.toString() !== req.user._id.toString() &&
    req.user.role !== "super-admin"
  ) {
    throw new AppError("You can only delete your own posts", 403);
  }

  await Post.findByIdAndDelete(id);
  res.status(200).json({ message: "Post deleted successfully" });
};

module.exports = {
  createPost,
  getAllPosts,
  getUserPosts,
  updatePost,
  deletePost,
};
