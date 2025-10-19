import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import AddToCartModal from "../components/AddToCartModal";
import "../css/components/ProductCard.css";
import "../css/pages/Product.css";

export default function Product() {
  const { addToCart, userId } = useCart(); // ✅ get userId from context
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notification, setNotification] = useState(null);

  console.log("Product page userId:", userId); // should now log your decoded user ID

  useEffect(() => {
    fetch("/api/gowns")
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  const handleAddToCart = (product) => setSelectedProduct(product);

  const confirmAddToCart = async (product, quantity) => {
    try {
      await addToCart(product, quantity);

      setNotification({
        type: "success",
        message: `Added ${quantity} x ${product.name} to cart!`,
      });
    } catch (err) {
      setNotification({
        type: "error",
        message: `Failed to add ${product.name} to cart.`,
      });
    }

    setSelectedProduct(null);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <>
      <div className="product-page">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              price={p.price}
              image={p.image_url}
              onAddToCart={() => handleAddToCart(p)}
            />
          ))}
        </div>

        {selectedProduct && (
          <AddToCartModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onConfirm={confirmAddToCart}
          />
        )}
      </div>

      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </>
  );
}
