import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { register } from "../../models/customerModel/userModel";
import { findUserByPhoneAndRole, removeRefreshToken, updateRefreshToken } from '../../models/authModel';
import { hashPassword, validatePassword } from "../../utils/authUtils";

const customerLogin = async (req: Request, res: Response) => {
  const { phone, password } = req.body;

  try {
    const user = await findUserByPhoneAndRole(phone, 'customer');
    if (!user) {
      res.status(400).json({ success: false, msg: 'Invalid phone number or password' });
      return;
    }

    const validPassword = await validatePassword(password, user.password);
    if (!validPassword) {
      res.status(400).json({ success: false, msg: 'Invalid phone number or password' });
      return;
    }

    const accessToken = jwt.sign({
      id: user.id,
      phone: user.phone,
      role: user.role
    }, process.env.JWT_SECRET as string, { expiresIn: '15m' });

    const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_SECRET as string, {
      expiresIn: '7d'
    });

    await updateRefreshToken(user.id, refreshToken);

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      msg: 'Logged in successfully',
      success: true,
      customer: {
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

const logout = async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;

  if (!refreshToken) {
    res.status(400).json({ message: "No refresh token provided" });
    return;
  }

  try {
    await removeRefreshToken(refreshToken);

    // Clear cookies
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({  status:'success', msg: "Logged out successfully" });
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({ message: "Server error" });
    return;
  }
};


export { customerLogin, customerRegister, logout };