import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import adminAuthRoutes from './routes/admin/authRoutes';

import businessAuthRoutes from './routes/business/authRoutes';
import businessAppointmentsRoutes  from './routes/business/appointmentsRoutes';

import customerAuthRoutes from './routes/customer/authRoutes';
import customerProfileRoutes from './routes/customer/profileRoutes';
import customerAppointmentsRoutes from "./routes/customer/appointmentsRoutes";

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // ✅ Set this to your frontend URL
  credentials: true, // ✅ Allow sending cookies (for JWT in httpOnly cookies)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // ✅ Allow standard methods
  allowedHeaders: ['Content-Type', 'Authorization'], // ✅ Allow these headers
}));

app.use(express.json());
app.use(cookieParser());

app.get('/', (_,res)=>{
  res.send('FixIt Backend is Running!')
})

app.use('/api/admin/auth', adminAuthRoutes);

app.use('/api/business/auth', businessAuthRoutes);
app.use('/api/business/appointments', businessAppointmentsRoutes);

app.use('/api/customer/auth', customerAuthRoutes);
app.use('/api/customer/profile', customerProfileRoutes)
app.use('/api/customer/appointments', customerAppointmentsRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});