import { getDB } from '../config/db.js';

export async function createCountriesTable() {
  const db = getDB();
  await db.execute(`
    CREATE TABLE IF NOT EXISTS countries (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100)
    )
  `);
  console.log("✅ countries table created");
}
