const express = require("express");
const app = express();
const PORT = 3001;

// Middleware för att parsa JSON
app.use(express.json());

// Exempelrutt
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Starta servern
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
