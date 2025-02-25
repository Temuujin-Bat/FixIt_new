import express from "express";
import { getProfile, updateProfile } from "../../controllers/customer/profileController";
import { authenticateUser } from "../../middlewares/authMiddleware";

const router = express.Router();

router.post('/get-profile', authenticateUser, getProfile);
router.post('/update-profile', authenticateUser, updateProfile);

export default router;
