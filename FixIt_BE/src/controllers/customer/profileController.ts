import { Request, Response } from "express";
import { findUserById, updateUser } from "../../models/customerModel/userModel";

interface AuthRequest extends Request {
  user?: any;
}

const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized. Please log in." });
      return;
    }

    const userId = req.user.id;

    const user = await findUserById(userId);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res.json({ user });
  } catch (error) {
    console.error("Get Profile Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized. Please log in." });
      return;
    }

    const userId = req.user.id;
    const { phone, name } = req.body;

    const updatedUser = await updateUser(userId, { phone, name });

    res.json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Update Profile Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export { getProfile, updateProfile };