import express from "express";
const router = express.Router();
import db from "../../config/db.js";

router.post("/", async (req, res) => {
  const { guestName, emailAdmin, passwordAdmin, additionalGuests } = req.body;

  if (!guestName || !emailAdmin || !passwordAdmin) {
    return res.status(400).json({
      status: "400 Bad Request",
      message: "Guest name, email, and password are required",
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

    const { id: adminId, username } = adminResults[0];
    const token = Math.floor(100000 + Math.random() * 900000).toString();
    const additionalGuestsParsed = parseInt(additionalGuests, 10) || null;

    const [invitationResults] = await db.query(
      "INSERT INTO invitations (guestName, token, addedBy, additionalGuests) VALUES (?, ?, ?, ?)",
      [guestName, token, adminId, additionalGuestsParsed]
    );

    res.status(200).json({
      status: "success",
      message: "Guest added successfully",
      data: {
        guestName,
        token,
        addedBy: username,
        additionalGuests: additionalGuestsParsed,
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
