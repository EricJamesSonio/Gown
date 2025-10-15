import { db } from '../../config/db.js';

export async function createTable() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS order_items (
      id INT AUTO_INCREMENT PRIMARY KEY,
      gown_id INT NOT NULL,
      size VARCHAR(10),
      quantity INT DEFAULT 1,
      price_each DECIMAL(10,2),
      order_id INT,
      FOREIGN KEY (gown_id) REFERENCES gown_items(id),
      FOREIGN KEY (order_id) REFERENCES orders(id)
    )
  `);
  console.log("✅ order_items table created");
}
