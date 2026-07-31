const express = require("express");
const {
  createAdmin,
  getAllUsers,
  getOneUser,
  updateUserPutMethod,
  updateUserPatchMethod,
  deleteUser,
} = require("../controllers/user");
const {
  replaceUserSchema,
  updateUserSchema,
  createAdminSchema,
} = require("../utils/validate-schema/user");
const validate = require("../middleware/joi-validate");
const router = express.Router();
const { uploadOnMemory } = require("../middleware/upload-image");
const uplaodImageKit = require("../middleware/image-kit");
const auth = require("../middleware/auth");
const restrictTo = require("../middleware/restrictTo");
// const upload = multer({ storage: diskStorage });

router.use(auth);

router.post(
  "/users",
  auth,
  restrictTo("admin", "super-admin"),
  uploadOnMemory.single("img"),
  uplaodImageKit(false, "user-iti"),
  validate(createAdminSchema),
  createAdmin,
);

router.get("/users", restrictTo("admin", "super-admin"), getAllUsers);

router.get("/users/:id", getOneUser);

router.put("/users/:id", validate(replaceUserSchema), updateUserPutMethod);

router.patch("/users/:id", validate(updateUserSchema), updateUserPatchMethod);

router.delete("/users/:id", restrictTo("admin", "super-admin"), deleteUser);

module.exports = router;
