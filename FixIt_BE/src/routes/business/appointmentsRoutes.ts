import express from "express";
import { authenticateUser } from "../../middlewares/authMiddleware";
import { getBusinessAppointmentsController } from "../../controllers/business/appointmentsController";


const router = express.Router();

router.post("/get", authenticateUser, getBusinessAppointmentsController);

export default router;

