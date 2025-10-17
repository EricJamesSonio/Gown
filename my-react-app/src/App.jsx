import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import "./css/App.css";
import "./css/Navbar.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      {/* ✅ Give main the correct class name */}
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <section className="page-section">
                <h2>Welcome to My App</h2>
                <p>This is the main content area below the fixed navbar.</p>
              </section>
            }
          />
          <Route path="/products" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
}
