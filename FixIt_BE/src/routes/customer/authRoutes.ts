import express from 'express';
import { customerLogin, customerRegister } from "../../controllers/customer/authController";

const router = express.Router();

router.post('/login', customerLogin);
router.post('/register', customerRegister);

export default router;
