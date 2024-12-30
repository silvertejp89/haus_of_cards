const express = require("express");
const router = express.Router();
console.log("Loading dbConfig...");
const db = require("../../config/dbConfig");
console.log("dbConfig loaded successfully!");

// POST /users: Skapa en användare
router.post("/", async (req, res) => {
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

module.exports = router;
