// Third party
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

// Components
import { findUserById } from '../../models/customer/userModel';

interface AuthRequest extends Request{
  user?: any;
}

const authenticateUser = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      res.status(401).json({ success: false, msg: 'Unauthorized: No access token' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: number };
    if (!decoded?.id) {
      res.status(401).json({ success: false, msg: 'Invalid token' });
      return;
    }

    const user = await findUserById(decoded.id);
    if (!user) {
      res.status(404).json({ success: false, msg: 'User not found' });
      return;
    }

    req.user = { id: user.id };

    next();
  } catch (error) {
    res.status(403).json({ success: false, msg: 'Invalid token' });
    return;
  }
};

const refreshTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) {
    res.status(401).json({ success: false, msg: "Unauthorized: No refresh token" });
    return;
  }

  next();
};

export { authenticateUser, refreshTokenMiddleware };