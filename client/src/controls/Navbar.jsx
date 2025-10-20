import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext"; // ✅ import context
import "../css/controls/Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useUser(); // ✅ get user info + logout

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <h1 className="logo">MyApp</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Product</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/about">About</Link></li>

          {/* ✅ Always show Profile */}
          <li>
            <Link to="/profile">
              {user ? user.name || "Profile" : "Profile"}
            </Link>
          </li>

          {/* ✅ Show Login or Logout */}
          {user ? (
            <li>
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
