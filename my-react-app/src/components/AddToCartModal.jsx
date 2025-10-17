import { useState } from "react";
import "../css/components/AddToCartModal.css";

export default function AddToCartModal({ product, onClose, onConfirm }) {
  const [quantity, setQuantity] = useState(1);

  const handleConfirm = () => {
    onConfirm(product, quantity);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="modal-header">
          <img src={product.image} alt={product.name} className="modal-image" />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>

        <div className="modal-body">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          />
        </div>

        <div className="modal-footer">
          <button className="add-btn" onClick={handleConfirm}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
