// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Order from "../pages/Order";
import Home from "../pages/Home";
import Login from "../pages/Login";

import PageLayout from "../layouts/PageLayout";
import PlainLayout from "../layouts/PlainLayout";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ✅ Pages with Navbar */}
      <Route
        path="/"
        element={
          <PageLayout>
            <Home />
          </PageLayout>
        }
      />
      <Route
        path="/products"
        element={
          <PageLayout>
            <Product />
          </PageLayout>
        }
      />
      <Route
        path="/profile"
        element={
          <PageLayout>
            <Profile />
          </PageLayout>
        }
      />
      <Route
        path="/about"
        element={
          <PageLayout>
            <About />
          </PageLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <PageLayout>
            <Cart />
          </PageLayout>
        }
      />
      <Route
        path="/orders"
        element={
          <PageLayout>
            <Order />
          </PageLayout>
        }
      />

      {/* 🚪 Pages WITHOUT Navbar */}
      <Route
        path="/login"
        element={
          <PlainLayout>
            <Login />
          </PlainLayout>
        }
      />
    </Routes>
  );
}
