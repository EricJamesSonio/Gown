import "../css/components/CartItem.css";

export default function CartItem({ item, onQuantityChange, onRemove }) {
  const handleChange = (e) => {
    const newQty = parseInt(e.target.value);
    if (newQty > 0) onQuantityChange(item.id, newQty);
  };

  return (
    <div className="cart-item">
      {/* Use image_url from API */}
      <img src={item.image_url} alt={item.name} className="cart-item-image" />

      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>${item.price}</p>

        <div className="quantity-control">
          <label>Qty:</label>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="cart-item-actions">
        <p className="cart-item-total">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
        <button className="remove-btn" onClick={() => onRemove(item.id)}>
          ✕
        </button>
      </div>
    </div>
  );
}
