import { getDB } from "../config/db.js";

// 🛒 Fetch user's cart with gown details
export const getCartItemsByUser = async (userId) => {
  const db = getDB();
  const [rows] = await db.execute(
    `SELECT ci.id, ci.gown_id, ci.quantity, ci.size, gi.price
     FROM cart_items ci
     JOIN gown_items gi ON ci.gown_id = gi.id
     WHERE ci.user_id = ?`,
    [userId]
  );
  return rows;
};

// 🎟️ Get discount percentage if valid
export const getDiscountByCode = async (code) => {
  const db = getDB();
  const [rows] = await db.execute(
    `SELECT percentage
     FROM discounts
     WHERE code = ? AND active = TRUE
     AND (expiration_date IS NULL OR expiration_date > NOW())`,
    [code]
  );
  return rows[0] || null;
};

// 🧾 Create a new order
export const createOrder = async (userId, subtotal, discount, totalPayable) => {
  const db = getDB();
  const [result] = await db.execute(
    `INSERT INTO orders (user_id, subtotal, discount, total_payable)
     VALUES (?, ?, ?, ?)`,
    [userId, subtotal, discount, totalPayable]
  );
  return result.insertId;
};

// 📦 Add order items
export const addOrderItem = async (orderId, item) => {
  const db = getDB();
  await db.execute(
    `INSERT INTO order_items (gown_id, size, quantity, price_each, order_id)
     VALUES (?, ?, ?, ?, ?)`,
    [
      item.gown_id,
      item.size || null,
      item.quantity || 1,
      item.price || 0,
      orderId,
    ]
  );
};

// 🧹 Clear user's cart
export const clearUserCart = async (userId) => {
  const db = getDB();
  await db.execute(`DELETE FROM cart_items WHERE user_id = ?`, [userId]);
};

// 🧾 Insert a receipt
export const createReceipt = async (receiptCode, amountPaid, orderId) => {
  const db = getDB();
  await db.execute(
    `INSERT INTO receipts (receipt_code, amount_paid, order_id, change_amount)
     VALUES (?, ?, ?, ?)`,
    [receiptCode, amountPaid, orderId, 0]
  );
};
