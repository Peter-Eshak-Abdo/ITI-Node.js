const express = require("express");
const {
  createUser,
  getAllUsers,
  getOneUser,
  updateUserPutMethod,
  updateUserPatchMethod,
  deleteUser,
} = require("../controllers/user");

const router = express.Router();

router.post("/users", createUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getOneUser);
router.put("/users/:id", updateUserPutMethod);
router.patch("/users/:id", updateUserPatchMethod);
router.delete("/users/:id", deleteUser);

module.exports = router;
