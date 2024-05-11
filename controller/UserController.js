// controllers/userController.js

import User from '../models/User.js';

// User login
export async function login(req, res, next) {
  try {
    // Implementation for user login
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate and send token for authentication
    const token = generateToken(user);
    res.json({ token });
  } catch (err) {
    next(err);
  }
}

// User registration
export async function register(req, res, next) {
    try {
      // Implementation for user registration
      const { email, password, username } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create a new user
      const newUser = new User({ email, password, username });
      await newUser.save();
  
      // Generate and send token for authentication
      const token = generateToken(newUser);
      res.status(201).json({ token });
    } catch (err) {
      next(err);
    }
  };

// User logout
export async function logout(req, res, next) {
  // Implementation for user logout
  res.json({ message: 'Logout successful' });
}

// Get current user profile
export async function getProfile(req, res, next) {
  try {
    // Implementation to get current user's profile
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.profile);
  } catch (err) {
    next(err);
  }
}

// Update user profile
export async function updateProfile(req, res, next) {
  try {
    // Implementation to update user's profile
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.user.id, { $set: { profile: updates } }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Profile updated successfully', profile: user.profile });
  } catch (err) {
    next(err);
  }
}

// Make profile public
export async function makeProfilePublic(req, res, next) {
  try {
    // Implementation to make user's profile public
    const user = await User.findByIdAndUpdate(req.user.id, { $set: { 'profile.visibility': 'public' } }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Profile visibility updated to public', profile: user.profile });
  } catch (err) {
    next(err);
  }
}

// Make profile private
export async function makeProfilePrivate(req, res, next) {
  try {
    // Implementation to make user's profile private
    const user = await User.findByIdAndUpdate(req.user.id, { $set: { 'profile.visibility': 'private' } }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Profile visibility updated to private', profile: user.profile });
  } catch (err) {
    next(err);
  }
}

// Get all users (only for admin)
export async function getAllUsers(req, res, next) {
  try {
    // Implementation to get all users (only for admin)
    const users = await User.find({}, { username: 1, email: 1, profile: 1 });
    res.json(users);
  } catch (err) {
    next(err);
  }
}

// Function to generate JWT token
function generateToken(user) {
  // Example implementation using JSON Web Tokens (JWT)
  // You may want to use a library like jsonwebtoken for this
  const token = 'exampleToken';
  return token;
}
