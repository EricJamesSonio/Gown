// server/src/models/gown.model.js
import { db } from '../config/db.js';

export const GownModel = {
  // Fetch all gowns
  async findAll() {
    const [rows] = await db.execute('SELECT * FROM gown_items ORDER BY id DESC');
    return rows;
  },

  // Fetch gown by ID
  async findById(id) {
    const [rows] = await db.execute('SELECT * FROM gown_items WHERE id = ?', [id]);
    return rows[0];
  },

  // Create new gown
  async create({ name, price, description, quantity, created_by }) {
    const [result] = await db.execute(
      `INSERT INTO gown_items (name, price, description, quantity, created_by)
       VALUES (?, ?, ?, ?, ?)`,
      [name, price, description, quantity, created_by]
    );

    return { id: result.insertId, name, price, description, quantity, created_by };
  },

  // Update existing gown
  async update(id, { name, price, description, quantity }) {
    await db.execute(
      `UPDATE gown_items 
       SET name = ?, price = ?, description = ?, quantity = ? 
       WHERE id = ?`,
      [name, price, description, quantity, id]
    );
    const [rows] = await db.execute('SELECT * FROM gown_items WHERE id = ?', [id]);
    return rows[0];
  },

  // Delete gown by ID
  async delete(id) {
    await db.execute('DELETE FROM gown_items WHERE id = ?', [id]);
    return { message: 'Gown deleted successfully', id };
  },
};
