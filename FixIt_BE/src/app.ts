import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import customerAuthRoutes from './routes/customer/authRoutes';
import customerProfileRoutes from './routes/customer/profileRoutes';
import customerBarbershops from './routes/customer/barbershopsRoutes';

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

app.use('/api/customer/auth', customerAuthRoutes);
app.use('/api/customer/profile', customerProfileRoutes);
app.use('/api/customer/barbershops', customerBarbershops)

const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});