import { db } from '../../config/db.js';

export async function createTable() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS gown_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      price DECIMAL(10,2) NOT NULL,
      description TEXT,
      quantity INT DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      created_by INT,
      FOREIGN KEY (created_by) REFERENCES users(id)
    )
  `);
  console.log("✅ gown_items table created");
}
