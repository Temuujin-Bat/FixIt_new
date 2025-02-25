import express from "express";
import { businessLogin } from "../../controllers/business/authController";

const router = express.Router();

router.post('/login', businessLogin);

export default router;
