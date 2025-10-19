import { useNavigate } from "react-router-dom";
import "../css/pages/Home.css";
import Button from "../components/Button";

export default function Home() {
  const navigate = useNavigate();

  const handleShopClick = () => {
    navigate("/products"); // ✅ this will route to your shop page
  };

  return (
    <section className="home-page">
      <div className="home-hero">
        <div className="home-text">
          <h1 className="home-title">Discover Amazing Products</h1>
          <p className="home-description">
            Welcome to <span className="brand">MyShop</span> — your one-stop
            destination for all things tech, lifestyle, and more.
            <br />
            Explore exclusive deals and enjoy a seamless shopping experience.
          </p>

          <Button
            label="Start Shopping 🛍️"
            onClick={handleShopClick}
            type="primary"
          />
        </div>

        <div className="home-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="Shopping illustration"
          />
        </div>
      </div>
    </section>
  );
}
