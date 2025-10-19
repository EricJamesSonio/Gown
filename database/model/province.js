import { db } from '../config/db.js';

export async function createTable() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS provinces (
      id INT AUTO_INCREMENT PRIMARY KEY,
      country_id INT,
      name VARCHAR(100),
      FOREIGN KEY (country_id) REFERENCES countries(id)
    )
  `);
  console.log("✅ provinces table created");
}
