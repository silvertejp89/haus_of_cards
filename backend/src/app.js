const express = require("express");
const app = express();
const PORT = 3001;

const db = require("../config/dbConfig");

// Middleware för att hantera JSON
app.use(express.json());

// En enkel route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

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
