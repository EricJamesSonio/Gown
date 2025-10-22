import { getDB } from '../config/db.js';

export const CartModel = {
  async findExisting(user_id, gown_id, size) {
    const db = getDB();
    const [rows] = await db.execute(
      `SELECT id, quantity FROM cart_items WHERE user_id = ? AND gown_id = ? AND size = ?`,
      [user_id, gown_id, size]
    );
    return rows;
  },

  async addItem(user_id, gown_id, size, quantity) {
    const db = getDB();
    return db.execute(
      `INSERT INTO cart_items (user_id, gown_id, size, quantity) VALUES (?, ?, ?, ?)`,
      [user_id, gown_id, size, quantity]
    );
  },

  async updateQuantity(id, quantity) {
    const db = getDB();
    return db.execute(`UPDATE cart_items SET quantity = ? WHERE id = ?`, [quantity, id]);
  },

  async incrementQuantity(id, quantity) {
    const db = getDB();
    return db.execute(`UPDATE cart_items SET quantity = quantity + ? WHERE id = ?`, [quantity, id]);
  },

  async getByUser(user_id) {
    const db = getDB();
    const [rows] = await db.execute(
      `SELECT c.id, g.id AS gown_id, g.name, g.price, g.image_url, c.quantity, c.size
       FROM cart_items c
       JOIN gown_items g ON c.gown_id = g.id
       WHERE c.user_id = ?`,
      [user_id]
    );
    return rows;
  },

  async deleteById(id) {
    const db = getDB();
    return db.execute(`DELETE FROM cart_items WHERE id = ?`, [id]);
  },

  async deleteByUser(user_id) {
    const db = getDB();
    return db.execute(`DELETE FROM cart_items WHERE user_id = ?`, [user_id]);
  },
};
