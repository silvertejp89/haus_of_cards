require("dotenv").config();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  port: 3307,
  user: "root",
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: "haus_of_cards",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
