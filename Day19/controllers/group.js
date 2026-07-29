const AppError = require("../utils/AppError");
const Group = require("../model/group");

const createGroup = async (req, res, next) => {
  const { name } = req.body;
  const group = await Group.create({
    name,
    admins: [req.user._id],
    members: [req.user._id],
  });
  res.status(201).json({ message: "Group created successfully", group });
};

const manageUsers = async (req, res, next) => {
  const { groupId } = req.params;
  const { userId, action, permission } = req.body;

  const group = await Group.findById(groupId);
  if (!group) throw new AppError("Group not found", 404);

  if (!group.admins.includes(req.user._id) && req.user.role !== "super-admin") {
    throw new AppError("Only admins can manage group users", 403);
  }

  if (action === "add") {
    if (!group.members.includes(userId)) group.members.push(userId);
    if (permission === "write" && !group.allowedToPost.includes(userId)) {
      group.allowedToPost.push(userId);
    }
  } else if (action === "remove") {
    group.members = group.members.filter((id) => id.toString() !== userId);
    group.allowedToPost = group.allowedToPost.filter(
      (id) => id.toString() !== userId,
    );
    group.admins = group.admins.filter((id) => id.toString() !== userId);
  }

  await group.save();
  res.status(200).json({ message: "Group updated successfully", group });
};

module.exports = { createGroup, manageUsers };
