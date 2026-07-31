// const mongoose = require("mongoose");
// const User = require("../model/user");

// const mongoConnect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log("Connect To MongoDB");
//     const superAdmin = await User.findOne({
//       email: process.env.SUPERADMIN_EMAIL,
//     });
//     if (!superAdmin) {
//       await User.create({
//         username: process.env.SUPERADMIN_NAME,
//         email: process.env.SUPERADMIN_EMAIL,
//         password: process.env.SUPERADMIN_PASSWORD,
//         role: "super-admin",
//       });
//     }
//   } catch (error) {
//     console.log("Failed toConnect to MongoDB", error)
//   }
// }

// module.exports = mongoConnect;
//-----------------------------------------------------------
const mongoose = require("mongoose");
const User = require("../model/user");

let connectionPromise = null;
let superAdminChecked = false;

const createSuperAdmin = async () => {
  if (superAdminChecked) return;

  const email = process.env.SUPERADMIN_EMAIL;
  const username = process.env.SUPERADMIN_NAME;
  const password = process.env.SUPERADMIN_PASSWORD;

  if (!email || !username || !password) {
    console.warn("Super-admin environment variables are incomplete.");
    superAdminChecked = true;
    return;
  }

  const superAdmin = await User.findOne({ email });

  if (!superAdmin) {
    await User.create({
      username,
      email,
      password,
      role: "super-admin",
    });
    console.log("Super-admin created");
  }

  superAdminChecked = true;
};

const mongoConnect = async () => {
  if (mongoose.connection.readyState === 1) {
    await createSuperAdmin();
    return mongoose.connection;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing");
  }

  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 10000,
      })
      .then(async (mongooseInstance) => {
        console.log("Connected to MongoDB");
        await createSuperAdmin();
        return mongooseInstance.connection;
      })
      .catch((error) => {
        connectionPromise = null;
        throw error;
      });
  }

  return connectionPromise;
};

module.exports = mongoConnect;
