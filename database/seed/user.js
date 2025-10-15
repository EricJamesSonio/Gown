import { db } from '../../config/db.js';

export async function seedUsers() {
  const users = [
    {
      name: 'Admin User',
      role: 'admin'
    }
  ];

  for (const user of users) {
    await db.execute(
      `INSERT INTO users (name, role) VALUES (?, ?)`,
      [user.name, user.role]
    );
  }

  console.log("👤 Admin user seeded!");
}
