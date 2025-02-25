import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import adminAuthRoutes from './routes/admin/authRoutes';
import businessAuthRoutes from './routes/business/authRoutes';

import customerAuthRoutes from './routes/customer/authRoutes';
import appointmentsRoutes from "./routes/customer/appointmentsRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_,res)=>{
  res.send('FixIt Backend is Running!')
})

app.use('/api/admin/auth', adminAuthRoutes);
app.use('/api/business/auth', businessAuthRoutes);
app.use('/api/customer/auth', customerAuthRoutes);

app.use('/api/appointments', appointmentsRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});