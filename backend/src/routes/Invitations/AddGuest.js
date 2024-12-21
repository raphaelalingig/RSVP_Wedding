import express from "express";
const router = express.Router();
import db from "../../config/db.js";

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

    // Extract the admin's username
    const { id: adminId, username } = adminResults[0];

    // Generate a 6-digit numeric token
    const token = Math.floor(100000 + Math.random() * 900000).toString();

    // Insert invitation data, including the username
    const [invitationResults] = await db.query(
      "INSERT INTO invitations (guestName, token, addedBy) VALUES (?, ?, ?)",
      [guestName, token, adminId]
    );

    res.status(200).json({
      status: "success",
      message: "Guest added successfully",
      data: {
        guestName,
        token,
        addedBy: username,
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