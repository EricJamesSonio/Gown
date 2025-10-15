import { db } from '../../config/db.js';

export async function createTable() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS cities (
      id INT AUTO_INCREMENT PRIMARY KEY,
      province_id INT,
      name VARCHAR(100),
      FOREIGN KEY (province_id) REFERENCES provinces(id)
    )
  `);
  console.log("✅ cities table created");
}
