import { getDB } from '../config/db.js';

export async function createAuthTable() {
  const db = getDB();
  await db.execute(`
    CREATE TABLE IF NOT EXISTS auth (
      user_id INT PRIMARY KEY,
      email VARCHAR(100) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);
  console.log("✅ auth table created");
}
