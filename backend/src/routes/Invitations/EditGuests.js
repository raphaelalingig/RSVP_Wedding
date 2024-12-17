import express from "express";
const router = express.Router();
import db from "../../config/db.js";

router.put("/", async (req, res) => {
  const { id, guestName, status, emailAdmin, passwordAdmin } = req.body;

  // Validate required fields
  if (!id || !guestName || !status || !emailAdmin || !passwordAdmin) {
    return res.status(400).json({
      status: "400 Bad Request",
      message: "Guest ID, name, status, and admin credentials are required",
    });
  }

  // Validate status is a number between 0 and 2
  if (![1, 2, 3].includes(Number(status))) {
    return res.status(400).json({
      status: "400 Bad Request",
      message: "Status must be 1, 2, or 3",
    });
  }

  try {
    // First verify admin credentials
    const [adminResults] = await db.query(
      "SELECT * FROM Admins WHERE email = ? AND password = ?",
      [emailAdmin, passwordAdmin]
    );

    if (adminResults.length === 0) {
      return res.status(401).json({
        status: "401 Unauthorized",
        message: "Invalid admin credentials",
      });
    }

    // Check if the invitation exists
    const [invitationCheck] = await db.query(
      "SELECT * FROM Invitations WHERE id = ?",
      [id]
    );

    if (invitationCheck.length === 0) {
      return res.status(404).json({
        status: "404 Not Found",
        message: "Invitation not found",
      });
    }

    // Update the invitation
    const [updateResult] = await db.query(
      "UPDATE Invitations SET guestName = ?, status = ? WHERE id = ?",
      [guestName, status, id]
    );

    if (updateResult.affectedRows === 0) {
      return res.status(500).json({
        status: "500 Internal Server Error",
        message: "Failed to update invitation",
      });
    }

    // Fetch the updated invitation
    const [updatedInvitation] = await db.query(
      "SELECT i.*, a.username as addedBy FROM Invitations i JOIN Admins a ON i.addedBy = a.id WHERE i.id = ?",
      [id]
    );

    res.status(200).json({
      status: "success",
      message: "Guest updated successfully",
      data: {
        id: updatedInvitation[0].id,
        guestName: updatedInvitation[0].guestName,
        status: updatedInvitation[0].status,
        token: updatedInvitation[0].token,
        addedBy: updatedInvitation[0].addedBy,
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

router.post("/", async (req, res) => {
  const { token, status } = req.body;

  if (!token || !status) {
    return res.status(400).json({
      status: "400 Bad Request",
      message: "Token and status are required",
    });
  }

  try {
    const [invitationCheck] = await db.query(
      "SELECT * FROM Invitations WHERE token = ?",
      [token]
    );

    if (invitationCheck.length === 0) {
      return res.status(404).json({
        status: "404 Not Found",
        message: "Invitation not found",
      });
    }

    const [updateResult] = await db.query(
      "UPDATE Invitations SET status = ? WHERE token = ?",
      [status, token]
    );

    if (updateResult.affectedRows === 0) {
      return res.status(500).json({
        status: "500 Internal Server Error",
        message: "Failed to update invitation",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Invitation updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "500 Internal Server Error",
      message: "An error occurred while processing your request.",
    });
  }
});

export default router;
