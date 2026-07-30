const mongoose = require("mongoose");

const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connect To MongoDB")
  } catch (error) {
    console.log("Failed toConnect to MongoDB", error)
  }
}

module.exports = mongoConnect;
