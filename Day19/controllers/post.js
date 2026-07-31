const AppError = require("../utils/AppError");
const Post = require("../model/post");
const Group = require("../model/group");

const hasId = (ids, id) =>
  ids.some((item) => item.toString() === id.toString());

const createPost = async (req, res) => {
  const { title, content, groupId } = req.body;
  const images = req.images || [];

  if (groupId) {
    const group = await Group.findById(groupId);
    if (!group) throw new AppError("Group not found", 404);

    const canPost =
      req.user.role === "super-admin" ||
      hasId(group.admins, req.user._id) ||
      hasId(group.allowedToPost, req.user._id);

    if (!canPost) {
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
    author: req.user._id,
    group: groupId || null,
  });

  res.status(201).json({ message: "Post created successfully", post });
};

const getAllPosts = async (req, res) => {
  const userGroups = await Group.find({
    $or: [{ admins: req.user._id }, { members: req.user._id }],
  }).select("_id");

  const groupIds = userGroups.map((group) => group._id);

  const posts = await Post.find({
    $or: [{ group: null }, { group: { $in: groupIds } }],
  })
    .sort({ createdAt: -1 })
    .populate("author", "username email image")
    .populate("group", "name");

  res.status(200).json({ message: "Posts retrieved successfully", posts });
};

const getUserPosts = async (req, res) => {
  const posts = await Post.find({ author: req.params.userId })
    .sort({ createdAt: -1 })
    .populate("author", "username email image")
    .populate("group", "name");

  res.status(200).json({ message: "User posts retrieved successfully", posts });
};

const updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) throw new AppError("Post not found", 404);

  const ownsPost = post.author.toString() === req.user._id.toString();
  if (!ownsPost && req.user.role !== "super-admin") {
    throw new AppError("You can only edit your own posts", 403);
  }

  const allowedFields = ["title", "content"];
  for (const field of allowedFields) {
    if (req.body[field] !== undefined) post[field] = req.body[field];
  }

  await post.save();

  res.status(200).json({ message: "Post updated successfully", post });
};

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) throw new AppError("Post not found", 404);

  const ownsPost = post.author.toString() === req.user._id.toString();
  if (!ownsPost && req.user.role !== "super-admin") {
    throw new AppError("You can only delete your own posts", 403);
  }

  await post.deleteOne();
  res.status(200).json({ message: "Post deleted successfully" });
};

module.exports = {
  createPost,
  getAllPosts,
  getUserPosts,
  updatePost,
  deletePost,
};
