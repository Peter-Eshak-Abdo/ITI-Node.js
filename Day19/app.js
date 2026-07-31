const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const mongoConnect = require("./config/db-connect");
const userRouter = require("./routers/user");
const authRouter = require("./routers/auth");
const postRouter = require("./routers/post");
const groupRouter = require("./routers/group");
const notFoundHandler = require("./middleware/not-found");
const errorHandler = require("./middleware/error");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure a database connection exists before API handlers run.
// The function caches the connection, so this also works with Vercel Functions.
app.use(async (req, res, next) => {
  try {
    await mongoConnect();
    next();
  } catch (error) {
    next(error);
  }
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Day19 Blog API is running",
    endpoints: {
      signup: "POST /api/auth/signup",
      login: "POST /api/auth/login",
      users: "GET /api/users",
      posts: "GET /api/posts",
      groups: "POST /api/groups",
    },
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "API and MongoDB are connected" });
});

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/groups", groupRouter);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
