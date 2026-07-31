const AppError = require("../utils/AppError");
const Group = require("../model/group");
const User = require("../model/user");

const hasId = (ids, id) =>
  ids.some((item) => item.toString() === id.toString());

const createGroup = async (req, res) => {
  const group = await Group.create({
    name: req.body.name,
    admins: [req.user._id],
    members: [req.user._id],
    allowedToPost: [req.user._id],
  });

  res.status(201).json({ message: "Group created successfully", group });
};

const manageUsers = async (req, res) => {
  const { groupId } = req.params;
  const { userId, action, permission } = req.body;

  const [group, targetUser] = await Promise.all([
    Group.findById(groupId),
    User.findById(userId),
  ]);

  if (!group) throw new AppError("Group not found", 404);
  if (!targetUser) throw new AppError("User not found", 404);

  const requesterIsAdmin = hasId(group.admins, req.user._id);
  if (!requesterIsAdmin && req.user.role !== "super-admin") {
    throw new AppError("Only admins can manage group users", 403);
  }

  if (action === "add") {
    if (!hasId(group.members, userId)) group.members.push(userId);

    if (permission === "write" && !hasId(group.allowedToPost, userId)) {
      group.allowedToPost.push(userId);
    }

    if (permission === "read") {
      group.allowedToPost = group.allowedToPost.filter(
        (id) => id.toString() !== userId.toString(),
      );
    }
  }

  if (action === "remove") {
    group.members = group.members.filter(
      (id) => id.toString() !== userId.toString(),
    );
    group.allowedToPost = group.allowedToPost.filter(
      (id) => id.toString() !== userId.toString(),
    );
    group.admins = group.admins.filter(
      (id) => id.toString() !== userId.toString(),
    );
  }

  await group.save();
  res.status(200).json({ message: "Group updated successfully", group });
};

module.exports = { createGroup, manageUsers };
