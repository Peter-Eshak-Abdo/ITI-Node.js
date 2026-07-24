const express = require("express");
const {
  createPost,
  getAllPosts,
  getOnePost,
  updatePostPutMethod,
  updatePostPatchMethod,
  deletePost,
} = require("../controllers/post");

const router = express.Router();

router.post("/posts", createPost);
router.get("/posts", getAllPosts);
router.get("/posts/:id", getOnePost);
router.put("/posts/:id", updatePostPutMethod);
router.patch("/posts/:id", updatePostPatchMethod);
router.delete("/posts/:id", deletePost);

module.exports = router;
