const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// 1. Request Logger Middleware
const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next(); // Passing control
};

// 2. API Key Authentication Middleware
const apiKeyAuth = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  const VALID_KEY = "super-secret-key-123";

  if (!apiKey) {
    return res
      .status(401)
      .json({ error: "Authentication required. Missing API Key." });
  }

  if (apiKey !== VALID_KEY) {
    return res.status(403).json({ error: "Invalid API Key." });
  }

  next(); // Key is valid, proceed
};

// 3. Input Validation Middleware (e.g., for creating a new user/product)
const validateInput = (req, res, next) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({
      error: "Bad Request. Username and email are required fields.",
    });
  }

  // Optional: Simple email format validation
  if (!email.includes("@")) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  next(); // Input is valid, proceed
};

// === Applying Middlewares ===

// Apply Logger globally to all routes
app.use(requestLogger);

// Example Route 1: Public route (Only affected by Logger)
app.get("/", (req, res) => {
  res.send("Welcome to the Public API!");
});

// Example Route 2: Protected route (Requires Auth)
app.get("/api/protected", apiKeyAuth, (req, res) => {
  res.json({ message: "You have accessed the protected data successfully!" });
});

// Example Route 3: Protected and Validated route (Requires Auth + Input Validation)
app.post("/api/users", apiKeyAuth, validateInput, (req, res) => {
  res.status(201).json({
    message: "User created successfully",
    user: req.body,
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
