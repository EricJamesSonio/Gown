import { db } from '../config/db.js';
import bcrypt from 'bcryptjs'; // for password hashing

export async function seedAuth() {
  // fetch all users
  const [users] = await db.execute(`SELECT * FROM users`);

  for (const user of users) {
    // simple default password: 'password123'
    const passwordHash = await bcrypt.hash('password123', 10);

    await db.execute(
      `INSERT INTO auth (user_id, email, password_hash) VALUES (?, ?, ?)`,
      [user.id, `${user.role}@example.com`, passwordHash]
    );
  }

  console.log("🔑 Auth records seeded!");
}
