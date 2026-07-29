const express = require("express");
// const mongoose = require("mongoose");

const app = express();


// mongoose
//   .connect(
//     "mongodb+srv://yarob2:yarob123@myfirstnodejscluster.toaytf9.mongodb.net/?retryWrites=true&w=majority",
//   )
//   .then(() => {
//     console.log("connected successfully");
//   })
//   .catch((error) => {
//     console.log("error with connecting with the DB ", error);
//   });

app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("hello");
});

app.get("/", (req, res) => {
  res.send("hello in node js project");
});

app.get("/numbers", (req, res) => {
  let numbers = "";
  for (let i = 0; i <= 100; i++) {
    numbers += i + " - ";
  }
  res.render("numbers.ejs", {
    name: "Peter",
    numbers: numbers,
  });
});

app.get("/findSummation/:number1/:number2", (req, res) => {
  const num1 = req.params.number1;
  const num2 = req.params.number2;

  const total = Number(num1) + Number(num2);

  res.send(`the total is ${total}`);
});

app.get("/sayHello", (req, res) => {
  // console.log(req.body);

  // console.log(req.query);
  // res.send(`Hello ${req.body.name}, Age is: ${req.query.age}`);

  res.json({
    name: req.body.name,
    age: req.query.age,
    language: "Arabic",
  });
});

app.put("/test", (req, res) => {
  res.send("hello world");
});

app.post("/addComment", (req, res) => {
  res.send("post request on add comment");
});

app.delete("/testingDelete", (req, res) => {
  res.send("delete request");
});


app.listen(3000, () => {
  console.log("I am listening in port 3000");
});
