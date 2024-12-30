const express = require("express");
const app = express();
const PORT = 3001;

const { initializeDatabase } = require("./models/dbInit"); // Importera init-logik
const userRoutes = require("./routes/users"); // Importera API-routes

// Middleware för att hantera JSON
app.use(express.json());

// Initiera databasen
initializeDatabase();

// Hälsokoll
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Använd users-routen
app.use("/users", userRoutes);

// Starta servern
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
