import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { register } from "../../models/customerModel/userModel";
import { findUserByPhoneAndRole } from "../../models/userModel";
import { hashPassword, validatePassword } from "../../utils/authUtils";

const customerLogin = async (req: Request, res: Response) => {
  const { phone, password } = req.body;

  try {
    const user = await findUserByPhoneAndRole(phone, 'customer');
    if (!user) {
      res.status(400).json({ message: 'Invalid phone number or password' });
      return;
    }

    const validPassword = await validatePassword(password, user.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Invalid phone number or password' });
      return;
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

    res.json({
      token,
      user: {
        id: user.id,
        phone: user.phone,
        name: user.name,
        role: user.role,
      }
    });
  } catch (error) {
    console.error('Customer Login Controller Error', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const customerRegister = async (req: Request, res: Response) => {
  const { phone, name, password } = req.body;
  const role = 'customer';

  try {
    const user = await findUserByPhoneAndRole(phone, 'customer');
    if (user) {
      res.status(400).json({ message: 'Phone number is already registered' });
      return;
    }

    const hashedPassword = await hashPassword(password);
    const result = await register(phone, name, hashedPassword, role);

    res.status(201).json({ message: 'Customer registered successfully', user: result });
  } catch (error) {
    console.error('Customer Register Controller Error', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export { customerLogin, customerRegister };