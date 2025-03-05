// Third party
import express from 'express';

// Components
import { customerLogin, customerRegister, logout, refreshToken } from '../../controllers/customer/authController';
import { refreshTokenMiddleware } from '../../middlewares/customer/authMiddleware';

const router = express.Router();

router.post('/login', customerLogin);
router.post('/register', customerRegister);
router.post('/refresh', refreshToken);
router.post('/logout',refreshTokenMiddleware, logout)

export default router;
