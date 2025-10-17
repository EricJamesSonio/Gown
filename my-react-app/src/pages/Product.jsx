import ProductCard from "../components/ProductCard";
import "../css/components/ProductCard.css";

export default function Product() {
  const products = [
    { name: "White Gown", price: 180, image: "../../gowns/whitegown.jpg" },
    { name: "Red Gown", price: 120, image: "../../gowns/redgown.jpg" },
    { name: "Purple Gown", price: 200, image: "../../gowns/purplegown.jpg" },
    { name: "Pink Gown", price: 250, image: "../../gowns/pinkgown.jpg" },
    { name: "Blue Gown", price: 120, image: "../../gowns/bluegown.jpg" },
    { name: "Black Gown", price: 300, image: "../../gowns/blackgown.jpg" },
  ];

  
 

  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-page">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((p, index) => (
          <ProductCard
            key={index}
            name={p.name}
            price={p.price}
            image={p.image}
            onAddToCart={() => handleAddToCart(p)}
          />
        ))}
      </div>
    </div>
  );
}
