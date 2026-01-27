import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import Header from "./Component/Header";
import Home from "./Component/Home";
import Products from "./Component/Products";
import Cart from "./Component/Cart";
import AdminLogin from "./Component/AdminLogin";
import Admin from "./Component/Admin";

import "./App.css";

function App() {
  const navigate = useNavigate();

  // 🔹 PRODUCTS STATE (VISIBLE IN PRODUCTS PAGE)
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Mens Shoes",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 2,
      title: "T Shirt 705",
      price: 999,
      image:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
    },
    {
      id: 3,
      title: "Camera",
      price: 15999,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
    },
    {
      id: 4,
      title: "Dresses",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500",
    },
  ]);

  // 🔹 CART STATE
  const [cart, setCart] = useState([]);

  // 🛒 ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.id === product.id);

      if (exist) {
        return prev.map((i) =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    navigate("/cart");
  };

  // ➕ INCREASE QTY
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  // ➖ DECREASE QTY
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  return (
    <>
      <Header />

      <Routes>
        {/* USER PAGES */}
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <Products
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          }
        />

        {/* ADMIN AUTH */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={
            <Admin
              products={products}
              setProducts={setProducts}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
