// server/src/models/user.model.js
import { db } from "../config/db.js";

// 👤 Create a new user
export const createUser = async (name) => {
  const [result] = await db.execute(
    `INSERT INTO users (name) VALUES (?)`,
    [name]
  );
  return result.insertId;
};

// 📧 Create auth record
export const createAuth = async (userId, email, passwordHash) => {
  await db.execute(
    `INSERT INTO auth (user_id, email, password_hash) VALUES (?, ?, ?)`,
    [userId, email, passwordHash]
  );
};

// ☎️ Create empty contact record
export const createContact = async (userId) => {
  await db.execute(
    `INSERT INTO contacts (user_id, contact_no) VALUES (?, ?)`,
    [userId, null]
  );
};

// 🏠 Create empty address record
export const createAddress = async (userId) => {
  await db.execute(
    `INSERT INTO addresses (user_id, country_id, province_id, city_id, street, postal_code)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [userId, null, null, null, null, null]
  );
};

// 🔍 Get user by email (for login)
export const findUserByEmail = async (email) => {
  const [rows] = await db.execute(
    `SELECT * 
     FROM auth 
     JOIN users ON auth.user_id = users.id 
     WHERE email = ?`,
    [email]
  );
  return rows[0] || null;
};

// 🧾 Get full profile by user ID
export const getUserProfile = async (userId) => {
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

  return rows[0] || null;
};
