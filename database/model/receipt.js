import { getDB } from '../config/db.js';

export async function createReceiptsTable() {
  const db = getDB();
  await db.execute(`
    CREATE TABLE IF NOT EXISTS receipts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      receipt_code VARCHAR(50) UNIQUE,
      amount_paid DECIMAL(10,2),
      order_id INT,
      change_amount DECIMAL(10,2),
      issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (order_id) REFERENCES orders(id)
    )
  `);
  console.log("✅ receipts table created");
}
