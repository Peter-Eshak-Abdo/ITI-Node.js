const express = require("express");
const {
  createPost,
  getAllPosts,
  getOnePost,
  updatePost,
  deletePost,
} = require("../controllers/post");
const {
  createPostSchema,
  updatePostSchema,
} = require("../utils/validate-shema/post");
const validate = require("../middleware/joi-validate");
const router = express.Router();
const { uploadOnMomory } = require("../middleware/upload-image");
const uplaodImageKit = require("../middleware/image-kit");

router.post(
  "/posts",
  uploadOnMomory.single("img"),
  uplaodImageKit(false, "post-iti"),
  validate(createPostSchema),
  createPost,
);

router.get("/posts", getAllPosts);
router.get("/posts/:id", getOnePost);
router.put("/posts/:id", validate(updatePostSchema), updatePost);
router.patch("/posts/:id", validate(updatePostSchema), updatePost);
router.delete("/posts/:id", deletePost);

module.exports = router;
