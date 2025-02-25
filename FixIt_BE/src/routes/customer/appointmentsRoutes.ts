import express from "express";
import { bookAppointmentController, cancelAppointmentController } from "../../controllers/customer/appointmentsController";
import { authenticateUser } from "../../middlewares/authMiddleware";

const router = express.Router();

router.post('/book', authenticateUser, bookAppointmentController);
router.post('/cancel', authenticateUser, cancelAppointmentController);

export default router;