const express = require("express");
const app = express();

// // Bug 1: Missing middleware app.post('/api/users', (req, res) => {
// const { name, email } = req.body; // undefined!
// if (!name || !email) return res.status(400).send('Missing fields');
//  res.status(201).json({ name, email });
// });

// FIX 1: Add JSON parsing middleware
app.use(express.json());

app.post("/api/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).send("Missing fields");
  res.status(201).json({ name, email });
});

// // Bug 2: Wrong HTTP method app.post('/api/users/:id', (req, res) => {
//   res.json({ id: req.params.id, name: 'Ahmed' });
// });

// FIX 2: Change app.post to app.get for fetching data
app.get("/api/users/:id", (req, res) => {
  res.json({ id: req.params.id, name: "Ahmed" });
});

// // Bug 3: Incorrect status code app.delete('/api/users/:id', (req, res) => {
//   res.status(200).json({ message: 'Created successfully' });
// });

// FIX 3: Correct the response message for deletion
app.delete("/api/users/:id", (req, res) => {
  res.status(200).json({ message: "Deleted successfully" });
});

// // Bug 4: Port issue
// app.listen("three thousand", () => console.log("Running"));

// FIX 4: Change port from string 'three thousand' to integer 3000
app.listen(3000, () => console.log("Running on port 3000"));
