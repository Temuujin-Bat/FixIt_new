// Third party
import express from 'express';

// Components
import { getAllBarbershopsController } from '../../controllers/customer/barbershopsController';

const router = express.Router();

router.post('/get', getAllBarbershopsController);

export default router;
