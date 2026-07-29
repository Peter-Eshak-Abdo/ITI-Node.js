const express = require("express");
const { createGroup, manageUsers } = require("../controllers/group");
const auth = require("../middleware/auth");
const validate = require("../middleware/joi-validate");
const {
  groupSchema,
  groupManageSchema,
} = require("../utils/validate-schema/validation");
const router = express.Router();

router.post("/groups", auth, validate(groupSchema), createGroup);
router.post(
  "/groups/:groupId/manage",
  auth,
  validate(groupManageSchema),
  manageUsers,
);

module.exports = router;
