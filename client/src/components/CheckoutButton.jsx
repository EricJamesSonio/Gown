import { useCart } from "../context/CartContext";

export default function CheckoutButton() {
  const { clearCart } = useCart();

  const handleCheckout = async () => {
    const token = localStorage.getItem("token");
    if (!token) return alert("You must be logged in!");

    try {
      const res = await fetch("/api/checkout/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ discountCode: "" }),
      });

      const data = await res.json();

      if (!res.ok) {
        return alert(data.message || "Checkout failed");
      }

      // ✅ Clear cart after successful checkout
      await clearCart();

      alert(
        `✅ Checkout successful!\nOrder ID: ${data.orderId}\nTotal: ₱${data.totalPayable}`
      );
    } catch (err) {
      console.error(err);
      alert("Something went wrong during checkout.");
    }
  };

  return (
    <button className="checkout-btn" onClick={handleCheckout}>
      Checkout
    </button>
  );
}
