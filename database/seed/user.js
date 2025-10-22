import { getDB } from '../config/db.js';

export async function seedUsers() {
  const db = getDB();

  const users = [
    { name: 'Admin User', role: 'admin' },
    { name: 'Customer User', role: 'customer' }
  ];

  for (const user of users) {
    await db.execute(
      `INSERT INTO users (name, role) VALUES (?, ?)`,
      [user.name, user.role]
    );
  }

  console.log("👤 Users seeded!");
}
