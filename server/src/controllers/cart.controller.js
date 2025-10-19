import { db } from '../config/db.js';

export const addToCart = async (req, res) => {
  let { user_id, gown_id, size, quantity } = req.body;

  if (!user_id || !gown_id) {
    return res.status(400).json({ success: false, message: "User ID or Product ID missing" });
  }

  size = size ?? "";       // default to empty string
  quantity = quantity || 1; // default to 1

  try {
    const [existing] = await db.execute(
      `SELECT id, quantity FROM cart_items WHERE user_id = ? AND gown_id = ? AND size = ?`,
      [user_id, gown_id, size]
    );

    if (existing.length > 0) {
      await db.execute(
        `UPDATE cart_items SET quantity = quantity + ? WHERE id = ?`,
        [quantity, existing[0].id]
      );
    } else {
      await db.execute(
        `INSERT INTO cart_items (user_id, gown_id, size, quantity) VALUES (?, ?, ?, ?)`,
        [user_id, gown_id, size, quantity]
      );
    }

    res.json({ success: true, message: 'Item added to cart' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Database error' });
  }
};


// Get all cart items for a user
export const getCartItems = async (req, res) => {
  const { user_id } = req.params;

  try {
    const [items] = await db.execute(
      `SELECT c.id, g.id AS gown_id, g.name, g.price, g.image_url, c.quantity, c.size
       FROM cart_items c
       JOIN gown_items g ON c.gown_id = g.id
       WHERE c.user_id = ?`,
      [user_id]
    );
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch cart' });
  }
};

// Remove a cart item
export const removeCartItem = async (req, res) => {
  const { id } = req.params;

  try {
    await db.execute(`DELETE FROM cart_items WHERE id = ?`, [id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};

// Update quantity
export const updateCartItem = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    if (quantity <= 0) {
      await db.execute(`DELETE FROM cart_items WHERE id = ?`, [id]);
    } else {
      await db.execute(`UPDATE cart_items SET quantity = ? WHERE id = ?`, [quantity, id]);
    }
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
};
