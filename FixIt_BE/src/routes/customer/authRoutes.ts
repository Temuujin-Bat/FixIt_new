import express from 'express';
import { customerLogin, customerRegister, logout } from '../../controllers/customer/authController';
import { refreshToken } from '../../controllers/auth/refreshTokenController';
import { authenticateUser } from '../../middlewares/authMiddleware';

const router = express.Router();

router.post('/login', customerLogin);
router.post('/register', customerRegister);
router.post('/refresh', refreshToken);
router.post('/logout',authenticateUser, logout)

export default router;
