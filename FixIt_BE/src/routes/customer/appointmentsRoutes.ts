import express from "express";
import { bookAppointment } from "../../controllers/customer/appointmentsController";

const router = express.Router();

router.post('/book', bookAppointment);

export default router;