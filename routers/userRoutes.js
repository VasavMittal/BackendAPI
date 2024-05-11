// routes/userRoutes.js

import { Router } from 'express';
const userrouter = Router();
import { register, login, logout, getProfile, updateProfile, makeProfilePublic, makeProfilePrivate, getAllUsers } from '../controller/UserController.js';
import { authenticateUser, authenticateAdmin } from '../middleware/authMiddleware.js';

// User registration
userrouter.post('/register', register);

// User login
userrouter.post('/login', login);

// User logout
userrouter.post('/logout', authenticateUser, logout);

// Get current user profile
userrouter.get('/profile', authenticateUser, getProfile);

// Update user profile
userrouter.put('/profile', authenticateUser, updateProfile);

// Make profile public
userrouter.put('/profile/public', authenticateUser, makeProfilePublic);

// Make profile private
userrouter.put('/profile/private', authenticateUser, makeProfilePrivate);

// Get all users (only for admin)
userrouter.get('/', authenticateAdmin, getAllUsers);

export default userrouter;
