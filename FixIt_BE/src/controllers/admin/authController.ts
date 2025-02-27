import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { findUserByPhoneAndRole } from "../../models/authModel";
import { validatePassword } from "../../utils/authUtils";

dotenv.config();

const adminLogin = async (req: Request, res: Response) => {
  const { phone, password } = req.body;

  try{
    const user = await findUserByPhoneAndRole(phone, 'admin');

    if(!user) {
      res.status(400).json({ message: "Invalid phone number or password" });
    }

    const validPassword = await validatePassword(password, user.password);
    if(!validPassword){
      res.status(400).json({ message: "Invalid phone number or password"});
      return;
    }

    const token = jwt.sign({ id: user.id, role: user.role },
      process.env.JWT_SECRET as string, { expiresIn: '30m' });

    res.json({
      token,
      user: {
        id: user.id,
        phone: user.phone,
        name: user.name,
        role: user.role,
      }
    });
  }catch (error) {
    console.error('Admin Login Controller Error', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export { adminLogin };