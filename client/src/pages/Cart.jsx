import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import "../css/pages/Cart.css";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (id, qty) => {
    if (qty <= 0) return removeFromCart(id);
    updateQuantity(id, qty);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={removeFromCart}
              />
            ))}
          </div>

          <CartSummary total={total} />
        </div>
      )}
    </div>
  );
}
