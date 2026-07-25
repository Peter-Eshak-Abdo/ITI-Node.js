const express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
  getOneUser,
  updateUserPutMethod,
  upadateUserPatchMethod,
  deleteUser,
} = require("../controllers/user");
const {
  updateUserSchema,
  createUserSchema,
  loginUserSchema,
} = require("../utils/validate-shema/user");
const validate = require("../middleware/joi-validate");
const router = express.Router();
const { uploadOnMomory } = require("../middleware/upload-image");
const uplaodImageKit = require("../middleware/image-kit");

router.post("/users/login", validate(loginUserSchema), loginUser);

router.post(
  "/users",
  uploadOnMomory.single("img"),
  uplaodImageKit(false, "user-iti"),
  validate(createUserSchema),
  createUser,
);

router.get("/users", getAllUsers);
router.get("/users/:id", getOneUser);
router.put("/users/:id", validate(updateUserSchema), updateUserPutMethod);
router.patch("/users/:id", validate(updateUserSchema), upadateUserPatchMethod);
router.delete("/users/:id", deleteUser);

module.exports = router;
