// Third party
import { Request, Response } from "express";

// Components
import { findUserById, incrementNameChangeCount, updateUser } from '../../models/customer/userModel';

interface AuthRequest extends Request {
  user?: any;
}

const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      res.status(401).json({ success:false, msg: "Unauthorized. Please log in." });
      return;
    }

    const userId = req.user.id;
    const { name } = req.body;

    const user = await findUserById(userId);
    if (!user) {
      res.status(404).json({ success:false, msg: "User not found" });
      return
    }

    if (user.name_changes >= 2) {
      res.status(400).json({ success:false, msg: "You can only change your name twice." });
      return;
    }

    await updateUser(userId, { name });
    await incrementNameChangeCount(userId);

    res.json({ success: true, msg: "Profile updated successfully" });
  } catch (error) {
    console.error("Update Profile Error:", error);
    res.status(500).json({ success:false, msg: "Server error" });
  }
};

export { updateProfile };