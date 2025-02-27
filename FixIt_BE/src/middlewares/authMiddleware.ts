import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request{
  user?: any;
}

const authenticateUser = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.cookies.accessToken;

  if (!token) {
    res.status(401).json({ message: "Access denied. No token provided." });
    return;
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET as string);

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
    return;
  }
};

export { authenticateUser };