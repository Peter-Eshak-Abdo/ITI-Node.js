const express = require("express");
const userRouter = require("./routers/user");
const postRouter = require("./routers/post");
const errorHandler = require("./middleware/error");
const notFoundHandler = require("./middleware/not-found");
const logger = require("./middleware/logger");

const app = express();

app.use(express.json());
app.use(logger);

app.use(userRouter);
app.use(postRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
