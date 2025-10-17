import { useState } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import AddToCartModal from "../components/AddToCartModal";
import "../css/components/ProductCard.css";
import "../css/pages/Product.css";

export default function Product() {
  const products = [
    { id: 1, name: "White Gown", price: 180, image: "/gowns/whitegown.jpg" },
    { id: 2, name: "Red Gown", price: 120, image: "/gowns/redgown.jpg" },
    { id: 3, name: "Purple Gown", price: 200, image: "/gowns/purplegown.jpg" },
    { id: 4, name: "Pink Gown", price: 250, image: "/gowns/pinkgown.jpg" },
    { id: 5, name: "Blue Gown", price: 120, image: "/gowns/bluegown.jpg" },
    { id: 6, name: "Black Gown", price: 300, image: "/gowns/blackgown.jpg" },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const { cart, setCart } = useCart();

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
  };

  const confirmAddToCart = (product, quantity) => {
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
    setSelectedProduct(null);
  };

  return (
    <div className="product-page">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
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
  );
}
