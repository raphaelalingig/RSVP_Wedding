import { createConnection } from "mysql2/promise";

export async function initializeDatabase() {
  try {
    // Create connection config object
    const connectionConfig = {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: 3306,
    };

    // First create a connection without specifying a database
    let connection = await createConnection(connectionConfig);

    // Create the database if it doesn't exist
    await connection.query("CREATE DATABASE IF NOT EXISTS rsvp");
    await connection.query("USE rsvp");

    console.log("Database created/selected successfully");

    const tables = [
      `CREATE TABLE IF NOT EXISTS admins (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255),
        password VARCHAR(255),
        username VARCHAR(255)
      )`,
      `CREATE TABLE IF NOT EXISTS invitations (
        
        id INT AUTO_INCREMENT PRIMARY KEY,
        guestName VARCHAR(255),
        token VARCHAR(255),
        addedBy INT,
        FOREIGN KEY (addedBy) REFERENCES admins(id),
        status INT default 2
      )`,
    ];

    // Create tables
    for (const query of tables) {
      try {
        await connection.query(query);
        console.log(
          `Table created/verified successfully: ${query.split("(")[0].trim()}`
        );
      } catch (tableError) {
        console.error("Table creation error for query:", query);
        console.error("Specific error:", tableError);
      }
    }

    // Insert default admin if it doesn't exist

    // Show existing tables for verification
    const [existingTables] = await connection.query("SHOW TABLES");
    console.log("Existing Tables:", existingTables);

    await connection.end();
  } catch (error) {
    console.error("Comprehensive Database Connection Error:", {
      message: error.message,
      code: error.code,
      errno: error.errno,
    });
    throw error; // Re-throw the error to be caught by the calling function
  }
}
