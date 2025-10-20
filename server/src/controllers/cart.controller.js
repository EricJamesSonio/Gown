import { CartModel } from '../models/cart.model.js';

// Add item to cart
export const addToCart = async (req, res) => {
  let { user_id, gown_id, size, quantity } = req.body;

  if (!user_id || !gown_id) {
    return res.status(400).json({ success: false, message: "User ID or Product ID missing" });
  }

  size = size ?? "";
  quantity = quantity || 1;

  try {
    const existing = await CartModel.findExisting(user_id, gown_id, size);

    if (existing.length > 0) {
      await CartModel.incrementQuantity(existing[0].id, quantity);
    } else {
      await CartModel.addItem(user_id, gown_id, size, quantity);
    }

    res.json({ success: true, message: "Item added to cart" });
  } catch (err) {
    console.error("Add to cart error:", err);
    res.status(500).json({ success: false, message: "Database error" });
  }
};

// Get all cart items for a user
export const getCartItems = async (req, res) => {
  const { user_id } = req.params;
  try {
    const items = await CartModel.getByUser(user_id);
    res.json(items);
  } catch (err) {
    console.error("Get cart error:", err);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
};

// Remove a specific cart item
export const removeCartItem = async (req, res) => {
  const { id } = req.params;
  try {
    await CartModel.deleteById(id);
    res.json({ success: true });
  } catch (err) {
    console.error("Remove cart item error:", err);
    res.status(500).json({ success: false });
  }
};

// Update cart item quantity
export const updateCartItem = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  try {
    if (quantity <= 0) {
      await CartModel.deleteById(id);
    } else {
      await CartModel.updateQuantity(id, quantity);
    }
    res.json({ success: true });
  } catch (err) {
    console.error("Update cart item error:", err);
    res.status(500).json({ success: false });
  }
};

// ✅ Clear all cart items for a user
export const clearCart = async (req, res) => {
  const { userId } = req.params;
  try {
    await CartModel.deleteByUser(userId);
    res.json({ success: true, message: "Cart cleared successfully" });
  } catch (err) {
    console.error("Clear cart error:", err);
    res.status(500).json({ success: false, message: "Failed to clear cart" });
  }
};
