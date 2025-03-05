// Third party
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

// Components
import { findUserById, register } from '../../models/customer/userModel';
import { findUserByPhoneAndRole, removeRefreshToken, updateRefreshToken } from '../../models/customer/authModel';
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
      role: user.role,
    }, process.env.JWT_SECRET as string, { expiresIn: '2h' });

    const refreshToken = jwt.sign({
      id: user.id,
    }, process.env.REFRESH_SECRET as string, { expiresIn: '30d' });

    await updateRefreshToken(user.id, refreshToken);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      msg: 'Logged in successfully',
      success: true,
      accessToken,
      customer: {
        id: user.id,
        phone: user.phone,
        name: user.name,
        role: user.role,
        name_changes: user.name_changes
      }
    });
  } catch (error) {
    console.error('Customer Login Controller Error', error);
    res.status(500).json({ success: false, msg: 'Server error' });
  }
};

const customerRegister = async (req: Request, res: Response) => {
  const { phone, name, password } = req.body;
  const role = 'customer';

  try {
    const user = await findUserByPhoneAndRole(phone, 'customer');
    if (user) {
      res.status(400).json({ success: false, msg: 'Phone number is already registered' });
      return;
    }

    const hashedPassword = await hashPassword(password);
    const result = await register(phone, name, hashedPassword, role);

    res.status(201).json({ success: true, msg: 'Customer registered successfully', user: result });
  } catch (error) {
    console.error('Customer Register Controller Error', error);
    res.status(500).json({ success: false, msg: 'Server error' });
  }
};

const logout = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    res.status(400).json({ success: false, msg: "No refresh token provided" });
    return;
  }

  try {
    await removeRefreshToken(refreshToken);

    // Clear cookies
    res.clearCookie("accessToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    res.status(200).json({  success: true, msg: "Logged out successfully" });
  } catch (error) {
    console.error("Logout Error:", error);
    res.status(500).json({ success: false, msg: "Server error" });
    return;
  }
};

const refreshToken = async (req: Request, res: Response) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    res.status(401).json({ success: false, msg: 'No refresh token provided' });
    return;
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET as string) as { id: number };
    if (!decoded.id) {
      res.status(403).json({ success: false, msg: 'Invalid token format' });
      return;
    }

    const user = await findUserById(decoded.id);

    if (!user || user.refresh_token !== refreshToken) {
      res.status(403).json({ success: false, msg: 'Invalid refresh token' });
      return;
    }

    const newAccessToken = jwt.sign({
      id: decoded.id,
      phone: user.phone,
      role: user.role
    }, process.env.JWT_SECRET as string, {
      expiresIn: '15m',
    });

    res.json({ success: true, msg: 'Token refreshed', accessToken: newAccessToken });
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      console.error('Refresh Token Expired:', error);
      res.status(403).json({ success: false, msg: 'Refresh token expired' });
    } else if (error instanceof jwt.JsonWebTokenError) {
      console.error('Invalid Refresh Token:', error);
      res.status(403).json({ success: false, msg: 'Invalid refresh token' });
    } else {
      console.error('Unexpected Error:', error);
      res.status(500).json({ success: false, msg: 'Server error' });
    }
    return;
  }
};

export { customerLogin, customerRegister, logout, refreshToken };
