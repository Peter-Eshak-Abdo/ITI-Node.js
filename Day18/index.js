require("dotenv").config();
require("express-async-errors");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const userRouter = require("./routers/user");
const postRouter = require("./routers/post");
const errorHandler = require("./middleware/error");
const notFoundHandler = require("./middleware/not-found");

const app = express();

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use(morgan("dev"));
app.use(cors());

app.use(userRouter);
app.use(postRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT || 3000}`,
  );
  mongoose
    .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/node-js-iti")
    .then(() => console.log("DB Connected!"))
    .catch((err) => console.error(err));
});
