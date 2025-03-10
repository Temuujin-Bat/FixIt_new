// Third party
import express from 'express';

// Components
import { userAppointments } from '../../controllers/customer/appointmentsController';
import { authenticateUser } from '../../middlewares/customer/authMiddleware';

const router = express.Router();

router.post('/get', authenticateUser, userAppointments);

export default router;
