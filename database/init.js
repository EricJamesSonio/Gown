// database/init.js
import { connectDB, getDB } from './config/db.js';

// Tables
import { createUsersTable } from './model/user.js';
import { createContactsTable } from './model/contact.js';
import { createAuthTable } from './model/auth.js';
import { createCountriesTable } from './model/country.js';
import { createProvincesTable } from './model/province.js';
import { createCitiesTable } from './model/city.js';
import { createAddressesTable } from './model/address.js';
import { createGownItemsTable } from './model/gown_item.js';
import { createSizesTable } from './model/size.js';
import { createCartItemsTable } from './model/cart_item.js';
import { createOrdersTable } from './model/order.js';
import { createOrderItemsTable } from './model/order_item.js';
import { createReceiptsTable } from './model/receipt.js';
import { createDiscountsTable } from './model/discount.js';

// Seeds
import { seedGownItems } from './seed/gown_item.js';
import { seedUsers } from './seed/user.js';
import { seedAuth } from './seed/auth.js';

async function initDB() {
  try {
    // ✅ Connect to the database
    const db = await connectDB();

    console.log("🧱 Creating tables...");

    // 🧩 Create tables in dependency-safe order
    await createUsersTable();
    await createContactsTable();
    await createAuthTable();
    await createCountriesTable();
    await createProvincesTable();
    await createCitiesTable();
    await createAddressesTable();
    await createGownItemsTable();
    await createSizesTable();
    await createCartItemsTable();
    await createOrdersTable();
    await createOrderItemsTable();
    await createReceiptsTable();
    await createDiscountsTable();

    console.log("🌱 Seeding initial data...");
    await seedUsers();
    await seedGownItems();
    await seedAuth();

    console.log("✅ All tables created and seeded successfully!");

    // Close the database connection
    await db.end();
  } catch (err) {
    console.error("❌ Error initializing DB:", err);
    process.exit(1);
  }
}

// Run the initialization
initDB();
