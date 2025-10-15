import { db } from '../../config/db.js';

export async function createTable() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS addresses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      country_id INT,
      province_id INT,
      city_id INT,
      street VARCHAR(255),
      postal_code VARCHAR(10),
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (country_id) REFERENCES countries(id),
      FOREIGN KEY (province_id) REFERENCES provinces(id),
      FOREIGN KEY (city_id) REFERENCES cities(id)
    )
  `);
  console.log("✅ addresses table created");
}
