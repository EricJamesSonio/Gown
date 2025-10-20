// server/src/services/checkout.service.js
import { v4 as uuidv4 } from "uuid";
import * as checkoutModel from "../models/checkout.model.js";

export const processCheckout = async (userId, discountCode) => {
  // 1️⃣ Fetch cart items
  const cartItems = await checkoutModel.getCartItemsByUser(userId);
  if (cartItems.length === 0) throw new Error("Cart is empty");

  // 2️⃣ Compute subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + parseFloat(item.price || 0) * parseInt(item.quantity || 0),
    0
  );

  // 3️⃣ Apply discount (if valid)
  let discount = 0;
  if (discountCode) {
    const discountData = await checkoutModel.getDiscountByCode(discountCode);
    if (discountData) {
      discount = (subtotal * parseFloat(discountData.percentage)) / 100;
    }
  }

  const totalPayable = subtotal - discount;

  // 4️⃣ Create order
  const orderId = await checkoutModel.createOrder(userId, subtotal, discount, totalPayable);

  // 5️⃣ Add each order item
  for (const item of cartItems) {
    await checkoutModel.addOrderItem(orderId, item);
  }

  // 6️⃣ Clear cart
  await checkoutModel.clearUserCart(userId);

  // 7️⃣ Create receipt
  const receiptCode = uuidv4();
  await checkoutModel.createReceipt(receiptCode, totalPayable, orderId);

  return { orderId, totalPayable, receiptCode };
};
