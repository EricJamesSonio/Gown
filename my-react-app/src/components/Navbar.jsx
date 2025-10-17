import { useEffect, useState } from "react";
import "../css/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <h1 className="logo">MyApp</h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/products">Product</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    </nav>
  );
}
