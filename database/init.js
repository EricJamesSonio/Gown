import { db } from '../config/db.js';

import { createTable as createUsersTable } from './model/user.js';
import { createTable as createContactsTable} from './model/contact.js';
import { createTable as createAuthTable} from './model/auth.js';
import { createTable as createCountriesTable} from './model/country.js';
import { createTable as createProvincesTable} from './model/province.js';
import { createTable as createCitiesTable} from './model/city.js';
import { createTable as createAddressesTable} from './model/address.js';
import { createTable as createGownItemsTable} from './model/gown_item.js';
import { createTable as createSizesTable} from './model/size.js';
import { createTable as createCartItemsTable} from './model/cart_item.js';
import { createTable as createOrdersTable} from './model/order.js';
import { createTable as createOrderItemsTable} from './model/order_item.js';
import { createTable as createReceiptsTable} from './model/receipt.js';
import { createTable as createDiscountsTable} from './model/discount.js';

async function initDB() {
  console.log("🧱 Creating tables...");

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

  console.log("✅ All tables created successfully!");
  await db.end();
}

initDB();
