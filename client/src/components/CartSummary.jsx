// src/components/CartSummary.jsx
import "../css/components/CartSummary.css";
import CheckoutButton from "./CheckoutButton";

export default function CartSummary({ total }) {
  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>
      <p className="subtotal">
        Subtotal: <span>₱{total.toFixed(2)}</span>
      </p>

      {/* Use the imported CheckoutButton */}
      <CheckoutButton />
    </div>
  );
}
