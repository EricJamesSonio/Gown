import { useState } from "react";
import "../css/components/AddToCartModal.css";

export default function AddToCartModal({ product, onClose, onConfirm }) {
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState(null); // success or error message

  const handleConfirm = () => {
    try {
      onConfirm(product, quantity);
      setStatus({
        type: "success",
        message: `Added ${quantity} x ${product.name} ($${product.price}) to cart!`
      });

      // auto-close modal after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);

    } catch (err) {
      setStatus({
        type: "error",
        message: `Failed to add ${product.name} to cart.`
      });
    }
  };


  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="modal-header">
          <img
            src={product.image_url} 
            alt={product.name} 
            className="modal-image" 
          />
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
            disabled={status?.type === "success"} // disable input after success
          />

          {status && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
        </div>

        <div className="modal-footer">
          <button
            className="add-btn"
            onClick={handleConfirm}
            disabled={status?.type === "success"} // prevent double add
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
