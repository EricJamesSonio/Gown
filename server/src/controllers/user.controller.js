// server/src/controllers/user.controller.js
import * as userService from "../services/user.service.js";

export const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await userService.signup({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await userService.login({ email, password });
    res.json(data);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

export const profile = async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const user = await userService.getProfile(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    next(err);
  }
};
