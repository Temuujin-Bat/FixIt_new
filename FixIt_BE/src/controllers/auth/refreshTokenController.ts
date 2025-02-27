import { Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import { findUserByRefreshToken } from '../../models/authModel';

const refreshToken = async (req: Request, res: Response) => {
  const { refreshToken } = req.cookies;
  if (!refreshToken) {
    res.status(401).json({ message: 'No refresh token provided' });
    return;
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET as string) as JwtPayload;
    if (!decoded.id) {
      res.status(403).json({ message: 'Invalid token format' });
      return;
    }

    const user = await findUserByRefreshToken(decoded.id, refreshToken);
    if (!user) {
      res.status(403).json({ message: 'Invalid refresh token' });
      return;
    }

    const newAccessToken = jwt.sign({ id: decoded.id }, process.env.JWT_SECRET as string, {
      expiresIn: '15m',
    });

    res.cookie('accessToken', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 15 * 60 * 1000,
    });

    res.json({ message: 'Token refreshed' });
  } catch (error) {
    res.status(403).json({ message: 'Invalid refresh token' });
    return;
  }
};

export { refreshToken };