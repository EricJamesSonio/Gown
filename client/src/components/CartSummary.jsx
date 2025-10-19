import "../css/components/CartSummary.css";

export default function CartSummary({ total }) {
  return (
    <div className="cart-summary">
      <h3>Order Summary</h3>
      <p className="subtotal">
        Subtotal: <span>${total.toFixed(2)}</span>
      </p>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
}
