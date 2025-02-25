import { Request, Response } from "express";
import { findUserByPhoneAndRole } from "../../models/userModel";
import { validatePassword } from "../../utils/authUtils";
import jwt from "jsonwebtoken";

const businessLogin = async (req: Request, res: Response) => {
  const { phone, password } = req.body;

  try {
    const user = await findUserByPhoneAndRole(phone, 'business_owner');
    if (!user) {
      res.status(400).json({ message: 'Invalid phone number or password' });
      return;
    }

    const validPassword = await validatePassword(password, user.password);
    if (!validPassword) {
      res.status(400).json({ message: 'Invalid phone number or password' });
      return;
    }

    const token = jwt.sign({ id: user.id, role: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

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
    console.error('Business Login Controller Error', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export { businessLogin };