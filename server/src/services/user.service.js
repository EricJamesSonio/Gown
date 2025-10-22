// server/src/services/user.service.js
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import * as userModel from "../models/user.model.js";

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

// 🧍 Signup a new user
export const signup = async ({ name, email, password }) => {
  const hashed = await bcrypt.hash(password, SALT_ROUNDS);

  // 1️⃣ Create user in users table
  const userId = await userModel.createUser(name);

  // 2️⃣ Create auth record
  await userModel.createAuth(userId, email, hashed);

  // 3️⃣ Create placeholders for contact & address
  await userModel.createContact(userId);
  await userModel.createAddress(userId);

  return { id: userId, name, email };
};

// 🔐 Login user
export const login = async ({ email, password }) => {
  const user = await userModel.findUserByEmail(email);
  if (!user) throw new Error("Invalid credentials");

  const match = await bcrypt.compare(password, user.password_hash);
  if (!match) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { userId: user.user_id, role: user.role },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  return {
    token,
    user: { id: user.user_id, name: user.name, role: user.role },
  };
};

// 🧠 Get profile info
export const getProfile = async (userId) => {
  const user = await userModel.getUserProfile(userId);
  if (!user) return null;

  // Structure address data neatly
  const address = user.street
    ? {
        street: user.street,
        city: user.city,
        province: user.province,
        country: user.country,
      }
    : null;

  return {
    id: user.id,
    name: user.name,
    role: user.role,
    email: user.email,
    contact_no: user.contact_no,
    address,
  };
};
