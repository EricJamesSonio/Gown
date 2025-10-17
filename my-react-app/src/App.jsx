import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Cart from "./pages/Cart";
import "./css/pages/App.css";
import "./css/components/Navbar.css";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <section className="page-section">
                  <h2>Welcome to My App</h2>
                  <p>This App is my first react project, PRACTICING REACT</p>
                </section>
              }
            />
            <Route path="/products" element={<Product />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}
