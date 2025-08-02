import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contex/ThemeContex";
import { CartProvider } from "./contex/CartContext";

const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <Navbar />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
