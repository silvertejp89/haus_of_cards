const express = require("express");
const app = express();
const PORT = 3001;

const db = require("../config/dbConfig");
const { createUsersTable } = require("./models/UserModel");

// Middleware för att hantera JSON
app.use(express.json());

// En enkel route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

//createUser
app.post("/users", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const query = `INSERT INTO Users (username, email, password) VALUES (?, ?, ?)`;
    const [result] = await db.query(query, [username, email, password]);

    res
      .status(201)
      .json({ message: "User created successfully", userId: result.insertId });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create user", details: error.message });
  }
});

createUsersTable();

// Starta servern
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

db.query("SELECT 1 + 1 AS solution")
  .then(([rows]) => {
    console.log("Database connected! Test query result:", rows[0].solution);
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err.message);
  });
