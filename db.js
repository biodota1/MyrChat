import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "users",
//   password: "Petforest123",
//   port: 5173,
// });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    console.log("Connected to database:", result.rows);
  });
});

export default pool;
