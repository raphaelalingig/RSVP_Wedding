import { createConnection } from "mysql2/promise";

export async function initializeDatabase() {
  try {
    // Create connection config object
    const connectionConfig = {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME, // Use the Railway database name
    };

    // Create connection
    let connection = await createConnection(connectionConfig);

    // No need to create database since Railway provides it
    // Just use the existing database
    await connection.query(`USE ${process.env.DB_NAME}`);

    console.log("Connected to Railway database successfully");

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

    // Show existing tables for verification
    const [existingTables] = await connection.query("SHOW TABLES");
    console.log("Existing Tables:", existingTables);

    await connection.end();
  } catch (error) {
    console.error("Database Connection Error:", {
      message: error.message,
      code: error.code,
      errno: error.errno,
    });
    throw error;
  }
}
