import { createContext, useContext, useState, useEffect } from "react";
import { useUser } from "./UserContext"; // ✅ import user context

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const { user } = useUser(); // ✅ reactively get current user
  const userId = user?.id || null;
  const [cart, setCart] = useState([]);

  // 🔁 Fetch cart items whenever userId changes
  useEffect(() => {
    if (!userId) {
      setCart([]);
      return;
    }

    fetch(`/api/cart/${userId}`)
      .then(res => res.json())
      .then(setCart)
      .catch(console.error);
  }, [userId]);

  // ✅ Add to cart
  const addToCart = async (product, quantity = 1, size = "") => {
    if (!userId) throw new Error("User ID is missing");
    if (!product?.id) throw new Error("Product ID is missing");

    const safeSize = size ?? "";
    const safeQuantity = quantity || 1;

    const res = await fetch("/api/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        gown_id: product.id,
        quantity: safeQuantity,
        size: safeSize,
      }),
    });

    if (!res.ok) throw new Error("Failed to add to cart");

    setCart(prev => {
      const existing = prev.find(
        item => item.gown_id === product.id && item.size === safeSize
      );
      if (existing) {
        return prev.map(item =>
          item.gown_id === product.id && item.size === safeSize
            ? { ...item, quantity: item.quantity + safeQuantity }
            : item
        );
      }
      return [
        ...prev,
        { ...product, gown_id: product.id, quantity: safeQuantity, size: safeSize },
      ];
    });
  };

  // ✅ Remove from cart
  const removeFromCart = async (cartItemId) => {
    if (!cartItemId) return;
    await fetch(`/api/cart/${cartItemId}`, { method: "DELETE" });
    setCart(prev => prev.filter(item => item.id !== cartItemId));
  };

  // ✅ Update quantity
  const updateQuantity = async (cartItemId, quantity) => {
    if (!cartItemId) return;
    const safeQuantity = quantity || 1;
    await fetch(`/api/cart/${cartItemId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: safeQuantity }),
    });
    setCart(prev =>
      prev.map(item =>
        item.id === cartItemId ? { ...item, quantity: safeQuantity } : item
      )
    );
  };

  // ✅ Clear cart (both backend + UI)
  const clearCart = async () => {
    if (!userId) return;
    try {
      await fetch(`/api/cart/clear/${userId}`, { method: "DELETE" });
      setCart([]); // immediately clear the UI
    } catch (err) {
      console.error("Failed to clear cart:", err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        userId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
