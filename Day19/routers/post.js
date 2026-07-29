const express = require("express");
const {
  createPost,
  getAllPosts,
  getUserPosts,
  updatePost,
  deletePost,
} = require("../controllers/post");
const auth = require("../middleware/auth");
const { uploadOnMomory } = require("../middleware/upload-image");
const uplaodImageKit = require("../middleware/image-kit");
const validate = require("../middleware/joi-validate");
const { postSchema } = require("../utils/validate-schema/validation");
const router = express.Router();

router.post(
  "/posts",
  auth,
  uploadOnMomory.array("images", 5),
  uplaodImageKit(true, "blog-posts"),
  validate(postSchema),
  createPost,
);
router.get("/posts", auth, getAllPosts);
router.get("/users/:userId/posts", auth, getUserPosts);
router.put("/posts/:id", auth, updatePost);
router.delete("/posts/:id", auth, deletePost);

module.exports = router;
