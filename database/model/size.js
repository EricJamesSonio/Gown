import { getDB } from '../config/db.js';

export async function createSizesTable() {
  const db = getDB();
  await db.execute(`
    CREATE TABLE IF NOT EXISTS sizes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      gown_id INT NOT NULL,
      size ENUM('S','M','L','XL','XXL','3X') NOT NULL,
      stock INT DEFAULT 0,
      FOREIGN KEY (gown_id) REFERENCES gown_items(id)
    )
  `);
  console.log("✅ sizes table created");
}
