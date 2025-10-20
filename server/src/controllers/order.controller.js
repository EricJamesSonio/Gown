import { db } from "../config/db.js";
import { v4 as uuidv4 } from "uuid";

export const checkout = async (req, res) => {
  const userId = req.user?.userId;
  const { discountCode } = req.body;

  if (!userId) return res.status(401).json({ message: "Unauthorized" });

  try {
    // 1️⃣ Get cart items for the user
    const [cartItems] = await db.execute(
      `SELECT ci.id, ci.gown_id, ci.quantity, ci.size, gi.price 
       FROM cart_items ci
       JOIN gown_items gi ON ci.gown_id = gi.id
       WHERE ci.user_id = ?`,
      [userId]
    );

    if (cartItems.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // 2️⃣ Compute subtotal
    const subtotal = cartItems.reduce((total, item) => {
      const price = parseFloat(item.price || 0);
      const qty = parseInt(item.quantity || 0);
      return total + price * qty;
    }, 0);

    // 3️⃣ Apply discount if available (ignore if table is empty)
    let discount = 0;
    if (discountCode) {
      try {
        const [rows] = await db.execute(
          `SELECT percentage 
           FROM discounts 
           WHERE code = ? AND active = TRUE 
           AND (expiration_date IS NULL OR expiration_date > NOW())`,
          [discountCode]
        );

        if (rows.length > 0) {
          const percentage = parseFloat(rows[0].percentage || 0);
          discount = (subtotal * percentage) / 100;
        }
      } catch (discountErr) {
        console.warn("⚠️ Discount lookup skipped:", discountErr.message);
      }
    }

    const totalPayable = subtotal - discount;

    // 4️⃣ Insert new order
    const [orderResult] = await db.execute(
      `INSERT INTO orders (user_id, subtotal, discount, total_payable)
       VALUES (?, ?, ?, ?)`,
      [userId, subtotal, discount, totalPayable]
    );
    const orderId = orderResult.insertId;

    // 5️⃣ Insert order items
    for (const item of cartItems) {
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
    }

    // 6️⃣ Clear the user's cart
    console.log("Sucessful Checkout!");
    await db.execute(`DELETE FROM cart_items WHERE user_id = ?`, [userId]);

    // 7️⃣ Create receipt entry
    const receiptCode = uuidv4();
    await db.execute(
      `INSERT INTO receipts (receipt_code, amount_paid, order_id, change_amount)
       VALUES (?, ?, ?, ?)`,
      [receiptCode, totalPayable, orderId, 0]
    );

    // ✅ 8️⃣ Respond success
    return res.json({
      message: "Checkout successful",
      orderId,
      totalPayable,
      receiptCode,
    });
  } catch (err) {
    console.error("❌ Checkout error:", err);
    res.status(500).json({ message: "Checkout failed", error: err.message });
  }
};
