import { getDB } from '../config/db.js';
import bcrypt from 'bcryptjs';

export async function seedAuth() {
  const db = getDB();

  // Fetch all users
  const [users] = await db.execute(`SELECT * FROM users`);

  for (const user of users) {
    const passwordHash = await bcrypt.hash('password123', 10);

    await db.execute(
      `INSERT INTO auth (user_id, email, password_hash)
       VALUES (?, ?, ?)`,
      [user.id, `${user.role}@example.com`, passwordHash]
    );
  }

  console.log("🔑 Auth records seeded!");
}
