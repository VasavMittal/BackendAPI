// middleware/authMiddleware.js

import pkg from 'jsonwebtoken';
import User from '../models/User.js';

const { verify } = pkg;

export function authenticateUser(req, res, next) {
  // Get token from request header
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  // Verify token
  verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    try {
      // Fetch user based on decoded token
      const user = await User.findById(decoded.userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Attach user object to request for further use
      req.user = user;
      next();
    } catch (err) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  });
}

export function authenticateAdmin(req, res, next) {
  // Check if authenticated user is an admin
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({ message: 'Forbidden: Admin access required' });
  }
  
  next();
}
