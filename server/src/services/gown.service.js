// server/src/services/gown.service.js
import { db } from '../config/db.js';

export const getAllGowns = async () => {
  const [rows] = await db.execute('SELECT * FROM gown_items');
  return rows;
};

export const getGownById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM gown_items WHERE id = ?', [id]);
  return rows[0];
};

export const createGown = async ({ name, price, description, quantity, created_by }) => {
  const [result] = await db.execute(
    'INSERT INTO gown_items (name, price, description, quantity, created_by) VALUES (?, ?, ?, ?, ?)',
    [name, price, description, quantity, created_by]
  );
  return { id: result.insertId, name, price, description, quantity, created_by };
};

export const updateGown = async (id, { name, price, description, quantity }) => {
  await db.execute(
    'UPDATE gown_items SET name = ?, price = ?, description = ?, quantity = ? WHERE id = ?',
    [name, price, description, quantity, id]
  );
  return getGownById(id);
};

export const deleteGown = async (id) => {
  await db.execute('DELETE FROM gown_items WHERE id = ?', [id]);
  return { message: 'Gown deleted successfully', id };
};
