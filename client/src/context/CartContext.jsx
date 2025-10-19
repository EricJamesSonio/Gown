import { createContext, useContext, useState, useEffect } from "react";
import decodeJwt from "jwt-decode"; // ✅ default import


const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState(null);

  // Decode token from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const decoded = decodeJwt(token); // use decodeJwt
      setUserId(decoded.userId); // get userId from token
    } catch (err) {
      console.error("Invalid token", err);
    }
  }, []);

  // Fetch cart items once userId is available
  useEffect(() => {
    if (!userId) return;

    fetch(`/api/cart/${userId}`)
      .then(res => res.json())
      .then(setCart)
      .catch(console.error);
  }, [userId]);

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

  const removeFromCart = async (cartItemId) => {
    if (!cartItemId) return;
    await fetch(`/api/cart/${cartItemId}`, { method: "DELETE" });
    setCart(prev => prev.filter(item => item.id !== cartItemId));
  };

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

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, userId }}>
      {children}
    </CartContext.Provider>
  );
};
