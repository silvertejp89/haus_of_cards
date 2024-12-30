const db = require("../../config/dbConfig"); // Databasanslutning
const { createUsersTable } = require("./UserModel"); // Tabellskapare

// Initierar databasen genom att skapa tabeller och testa anslutningen
const initializeDatabase = async () => {
  try {
    // Skapa Users-tabellen
    await createUsersTable();
    console.log("Users table created or already exists.");

    // Testa databasen med en enkel fråga
    const [rows] = await db.query("SELECT 1 + 1 AS solution");
    console.log("Database connected! Test query result:", rows[0].solution);
  } catch (err) {
    console.error("Error initializing the database:", err.message);
  }
};

module.exports = { initializeDatabase };
