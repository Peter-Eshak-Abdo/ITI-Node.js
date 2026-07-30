const mongoose = require("mongoose");
const User = require("../model/user");

const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect To MongoDB");
    const superAdmin = await User.findOne({
      email: process.env.SUPERADMIN_EMAIL,
    });
    if (!superAdmin) {
      await User.create({
        username: process.env.SUPERADMIN_NAME,
        email: process.env.SUPERADMIN_EMAIL,
        password: process.env.SUPERADMIN_PASSWORD,
        role: "super-admin",
      });
    }
  } catch (error) {
    console.log("Failed toConnect to MongoDB", error)
  }
}

module.exports = mongoConnect;
