import { db } from '../../config/db.js';

export async function createTable() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      contact_no VARCHAR(20),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);
  console.log("✅ contacts table created");
}
