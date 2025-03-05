import express from "express";
import {  updateProfile } from "../../controllers/customer/profileController";
import { authenticateUser } from "../../middlewares/customer/authMiddleware";

const router = express.Router();

router.post('/update', authenticateUser, updateProfile);

export default router;
