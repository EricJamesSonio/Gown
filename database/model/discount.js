import { getDB } from '../config/db.js';

export async function createDiscountsTable() {
  const db = getDB();
  await db.execute(`
    CREATE TABLE IF NOT EXISTS discounts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      code VARCHAR(50) UNIQUE,
      description VARCHAR(100),
      percentage DECIMAL(5,2),
      active BOOLEAN DEFAULT TRUE,
      expiration_date DATETIME
    )
  `);
  console.log("✅ discounts table created");
}
