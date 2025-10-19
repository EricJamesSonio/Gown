import * as userService from '../services/user.service.js';

// Signup a new user
export const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await userService.signup({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

// Login user
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await userService.login({ email, password });
    res.json(data);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

// Get logged-in user's profile
export const profile = async (req, res, next) => {
  try {
    // userId is attached by verifyToken middleware
    const userId = req.user.userId;

    const user = await userService.getProfile(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    next(err);
  }
};
