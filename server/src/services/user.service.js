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

  // Automatically create empty contact row
  await db.execute(
    'INSERT INTO contacts (user_id, contact_no) VALUES (?, ?)',
    [userId, null]
  );

  // Automatically create empty address row
  await db.execute(
    `INSERT INTO addresses (user_id, country_id, province_id, city_id, street, postal_code)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [userId, null, null, null, null, null]
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

// Get logged-in user's profile
export const getProfile = async (userId) => {
  const [rows] = await db.execute(
    `SELECT 
        u.id, 
        u.name, 
        u.role, 
        a.email, 
        c.contact_no,
        ad.street,
        ci.name AS city,
        pr.name AS province,
        co.name AS country
     FROM users u
     JOIN auth a ON a.user_id = u.id
     LEFT JOIN contacts c ON c.user_id = u.id
     LEFT JOIN addresses ad ON ad.user_id = u.id
     LEFT JOIN cities ci ON ci.id = ad.city_id
     LEFT JOIN provinces pr ON pr.id = ad.province_id
     LEFT JOIN countries co ON co.id = ad.country_id
     WHERE u.id = ?`,
    [userId]
  );

  if (rows.length === 0) return null;

  const user = rows[0];

  // Structure address nicely
  user.address = user.street
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
    address: user.address,
  };
};
