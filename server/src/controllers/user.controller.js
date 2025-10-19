import * as userService from '../services/user.service.js';

export const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await userService.signup({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await userService.login({ email, password });
    res.json(data);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};
