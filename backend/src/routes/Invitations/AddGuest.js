import express from "express";
const router = express.Router();
import db from "../../config/db.js";
import crypto from "crypto";

router.post("/", async (req, res) => {
  const { guestName, emailAdmin, passwordAdmin } = req.body;

  if (!guestName || !emailAdmin || !passwordAdmin) {
    return res.status(400).json({
      status: "400 Bad Request",
      message: "All fields are required",
    });
  }

  try {
    // Verify admin credentials and get username
    const [adminResults] = await db.query(
      "SELECT * FROM Admins WHERE email = ? AND password = ?",
      [emailAdmin, passwordAdmin]
    );

    if (adminResults.length === 0) {
      return res.status(401).json({
        status: "401 Unauthorized",
        message:
          "The email or password you entered is incorrect. Please try again.",
      });
    }

    // Extract the admin's username
    const { id: adminId, username } = adminResults[0];

    // Generate a token
    const token = crypto.randomBytes(16).toString("hex");

    // Insert invitation data, including the username
    const [invitationResults] = await db.query(
      "INSERT INTO Invitations (guestName, token, addedBy) VALUES (?, ?, ?)",
      [guestName, token, adminId]
    );

    res.status(200).json({
      status: "success",
      message: "Guest added successfully",
      data: {
        guestName,
        token,
        addedBy: username, // Include the username in the response
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "500 Internal Server Error",
      message: "An error occurred while processing your request.",
    });
  }
});

export default router;
