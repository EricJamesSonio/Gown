import { db } from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = 10;
const JWT_SECRET = 'your_jwt_secret'; // ideally put in .env

// Signup a new user
export const signup = async ({ name, email, password }) => {
  const hashed = await bcrypt.hash(password, SALT_ROUNDS);

  // Insert into users table
  const [userResult] = await db.execute(
    'INSERT INTO users (name) VALUES (?)',
    [name]
  );
  const userId = userResult.insertId;

  // Insert into auth table
  await db.execute(
    'INSERT INTO auth (user_id, email, password_hash) VALUES (?, ?, ?)',
    [userId, email, hashed]
  );

  return { id: userId, name, email };
};

// Login user
export const login = async ({ email, password }) => {
  const [rows] = await db.execute(
    'SELECT * FROM auth JOIN users ON auth.user_id = users.id WHERE email = ?',
    [email]
  );

  if (rows.length === 0) throw new Error('Invalid credentials');

  const user = rows[0];
  const match = await bcrypt.compare(password, user.password_hash);
  if (!match) throw new Error('Invalid credentials');

  // Issue JWT
  const token = jwt.sign(
    { userId: user.user_id, role: user.role },
    JWT_SECRET,
    { expiresIn: '1d' }
  );

  return { token, user: { id: user.user_id, name: user.name, role: user.role } };
};
