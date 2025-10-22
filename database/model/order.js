import { getDB } from '../config/db.js';

export async function createOrdersTable() {
  const db = getDB();
  await db.execute(`
    CREATE TABLE IF NOT EXISTS orders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      subtotal DECIMAL(10,2),
      discount DECIMAL(10,2),
      total_payable DECIMAL(10,2),
      status ENUM('pending','paid','shipped','completed','cancelled') DEFAULT 'pending',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_by INT,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (updated_by) REFERENCES users(id)
    )
  `);
  console.log("✅ orders table created");
}
