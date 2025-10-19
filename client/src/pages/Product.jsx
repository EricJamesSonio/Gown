import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import AddToCartModal from "../components/AddToCartModal";
import "../css/components/ProductCard.css";
import "../css/pages/Product.css";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [notification, setNotification] = useState(null); // <-- floating message
  const { cart, setCart } = useCart();

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/gowns");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
  };

  const confirmAddToCart = (product, quantity) => {
    try {
      setCart((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
          return prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        }
        return [...prev, { ...product, quantity }];
      });

      // show floating success notification
      setNotification({
        type: "success",
        message: `Added ${quantity} x ${product.name} ($${product.price}) to cart!`
      });

    } catch (err) {
      setNotification({
        type: "error",
        message: `Failed to add ${product.name} to cart.`
      });
    }

    // close the modal immediately
    setSelectedProduct(null);

    // auto-hide notification after 3 seconds
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

      {/* Floating notification OUTSIDE .product-page */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </>
  );

}
