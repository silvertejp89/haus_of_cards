const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  port: 3307, // Detta är din Docker-port
  user: "root",
  password: "my-secret-pw",
  database: "haus_of_cards",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();
