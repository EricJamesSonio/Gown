// server/src/controllers/checkout.controller.js
import * as checkoutService from "../services/checkout.service.js";

export const checkout = async (req, res) => {
  const userId = req.user?.userId;
  const { discountCode } = req.body;

  if (!userId) return res.status(401).json({ message: "Unauthorized" });

  try {
    const result = await checkoutService.processCheckout(userId, discountCode);
    res.json({
      message: "Checkout successful",
      ...result,
    });
  } catch (err) {
    console.error("❌ Checkout error:", err);
    res.status(500).json({ message: err.message });
  }
};
