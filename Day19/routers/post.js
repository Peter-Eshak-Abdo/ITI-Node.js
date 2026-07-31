const express = require("express");
const {
  createPost,
  getAllPosts,
  getUserPosts,
  updatePost,
  deletePost,
} = require("../controllers/post");
const auth = require("../middleware/auth");
const { uploadOnMemory } = require("../middleware/upload-image");
const uploadImageKit = require("../middleware/image-kit");
const validate = require("../middleware/joi-validate");
const {
  postSchema,
  updatePostSchema,
} = require("../utils/validate-schema/validation");

const router = express.Router();

router.use(auth);

router.post(
  "/posts",
  uploadOnMemory.array("images", 5),
  uploadImageKit(true, "blog-posts"),
  validate(postSchema),
  createPost,
);
router.get("/posts", getAllPosts);
router.get("/users/:userId/posts", getUserPosts);
router.patch("/posts/:id", validate(updatePostSchema), updatePost);
router.delete("/posts/:id", deletePost);

module.exports = router;
