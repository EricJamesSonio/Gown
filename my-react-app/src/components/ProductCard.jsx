import "../css/ProductCard.css";
import Button from "./Button";

export default function ProductCard({ name, price, image, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-img" />
      <h3>{name}</h3>
      <p className="price">₱{price}</p>
      <Button label="Add to Cart" onClick={onAddToCart} />
    </div>
  );
}
