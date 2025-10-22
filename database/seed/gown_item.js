import { getDB } from '../config/db.js';

export async function seedGownItems() {
  const db = getDB();

  const items = [
    {
      name: 'Elegant White Wedding Gown',
      price: 15999.99,
      description: 'A beautiful white wedding gown with lace details and a long train.',
      quantity: 5,
      image_url: '/gowns/whitegown.jpg',
      created_by: 1
    },
    {
      name: 'Modern Satin Evening Gown',
      price: 8999.50,
      description: 'A sleek satin evening gown perfect for formal events.',
      quantity: 8,
      image_url: '/gowns/redgown.jpg',
      created_by: 1
    },
    {
      name: 'Classic Ball Gown',
      price: 12500.00,
      description: 'Traditional ball gown with full skirt and corset bodice.',
      quantity: 4,
      image_url: '/gowns/purplegown.jpg',
      created_by: 1
    },
    {
      name: 'Bohemian Lace Dress',
      price: 7600.00,
      description: 'A lightweight boho-style gown with soft lace and open back.',
      quantity: 6,
      image_url: '/gowns/pinkgown.jpg',
      created_by: 1
    },
    {
      name: 'Royal Blue Prom Gown',
      price: 10499.99,
      description: 'Eye-catching royal blue gown with beaded embellishments.',
      quantity: 3,
      image_url: '/gowns/bluegown.jpg',
      created_by: 1
    },
    {
      name: 'Classic Black Evening Gown',
      price: 11000.00,
      description: 'Elegant black gown suitable for evening events.',
      quantity: 2,
      image_url: '/gowns/blackgown.jpg',
      created_by: 1
    }
  ];

  for (const item of items) {
    await db.execute(
      `INSERT INTO gown_items (name, price, description, quantity, image_url, created_by)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [item.name, item.price, item.description, item.quantity, item.image_url, item.created_by]
    );
  }

  console.log("🌸 Gown items successfully seeded!");
}
