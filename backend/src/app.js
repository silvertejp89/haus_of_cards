const express = require("express");
const app = express();
const PORT = 3001;

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
