import express from "express";
import pkg from "body-parser";
import { config } from "dotenv";

import loginUserRouter from "./src/routes/Admin/LoginAdmin.js";
import addGuestRouter from "./src/routes/Invitations/AddGuest.js";
import showGuestRouter from "./src/routes/Invitations/ShowGuests.js";
import editGuestRouter from "./src/routes/Invitations/EditGuests.js";
import deleteGuestRouter from "./src/routes/Invitations/DeleteGuests.js";

import { initializeDatabase } from "./src/config/initializeDatabase.js";
import cors from "cors";

const { json } = pkg;
config();

const app = express();
const PORT = process.env.PORT || 5000;
const urlFormat = "/api/v1/";

// Middleware
app.use(json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Routes

// Admin Routes
app.use(`${urlFormat}login`, loginUserRouter);

// Add Guests
app.use(`${urlFormat}addGuest`, addGuestRouter);
app.use(`${urlFormat}showGuests`, showGuestRouter);
app.use(`${urlFormat}editGuests`, editGuestRouter);
app.use(`${urlFormat}deleteGuests`, deleteGuestRouter);

// Base Route
app.get("/", (req, res) => {
  res.send("RSVP Backend Server");
});

// Initialize database before starting the server
initializeDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to initialize database:", error);
    process.exit(1); // Exit the process if database initialization fails
  });
