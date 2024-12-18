import express from "express";
const router = express.Router();
import db from "../../config/db.js";

router.delete("/", async (req, res) => {
  const { id, emailAdmin, passwordAdmin } = req.body;

  if (!id || !emailAdmin || !passwordAdmin) {
    return res.status(400).json({
      status: "400 Bad Request",
      message: "All fields are required",
    });
  }

  try {
    // First verify admin credentials
    const [adminResults] = await db.query(
      "SELECT * FROM admins WHERE email = ? AND password = ?",
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
      "SELECT * FROM invitations WHERE id = ?",
      [id]
    );

    if (invitationCheck.length === 0) {
      return res.status(404).json({
        status: "404 Not Found",
        message: "Invitation not found",
      });
    }

    // Delete the invitation
    const [deleteResult] = await db.query(
      "DELETE FROM invitations WHERE id = ?",
      [id]
    );

    if (deleteResult.affectedRows === 0) {
      return res.status(500).json({
        status: "500 Internal Server Error",
        message: "Failed to delete invitation",
      });
    }

    res.status(200).json({
      status: "200 OK",
      message: "Invitation deleted successfully",
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
