import express from "express";
const router = express.Router();
import db from "../../config/db.js";

// Existing POST method
router.post("/", async (req, res) => {
  const { emailAdmin, passwordAdmin } = req.body;

  if (!emailAdmin || !passwordAdmin) {
    return res.status(400).json({
      status: "400 Bad Request",
      message: "All fields are required",
    });
  }

  try {
    const [adminResults] = await db.query(
      "SELECT * FROM admins WHERE email = ? AND password = ?",
      [emailAdmin, passwordAdmin]
    );

    if (adminResults.length === 0) {
      return res.status(401).json({
        status: "401 Unauthorized",
        message:
          "The email or password you entered is incorrect. Please try again.",
      });
    }

    if (adminResults.length > 0) {
      const [guestResults] = await db.query("SELECT * FROM Invitations");

      if (guestResults.length > 0) {
        return res.status(200).json({
          status: "success",
          message: "Guests retrieved successfully",
          Data: guestResults,
        });
      } else {
        return res.status(404).json({
          status: "404 Not Found",
          message: "No guests found",
        });
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "500 Internal Server Error",
      message: "An error occurred while processing your request.",
    });
  }
});

// New GET method
router.get("/", async (req, res) => {
  try {
    const [guestResults] = await db.query("SELECT * FROM invitations");

    if (guestResults.length > 0) {
      return res.status(200).json({
        status: "success",
        message: "Guests retrieved successfully",
        Data: guestResults,
      });
    } else {
      return res.status(404).json({
        status: "404 Not Found",
        message: "No guests found",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "500 Internal Server Error",
      message: "An error occurred while processing your request.",
    });
  }
});

export default router;
