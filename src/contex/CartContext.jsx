import { createContext, useState, useCallback, useMemo } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

// A toast notification for a better UX
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback(
    (product) => {
      // Use a functional update to ensure we have the latest state
      setCart((prevCart) => {
        if (prevCart.some((item) => item.id === product.id)) {
          Toast.fire({
            icon: "warning",
            title: "This product is already in your cart.",
          });
          return prevCart; // Return previous state if item exists
        }

        Toast.fire({
          icon: "success",
          title: "Product added to your cart!",
        });
        return [...prevCart, product]; // Return new state with the new product
      });
    },
    [] // No dependencies as setCart's updater form handles getting the latest state
  );

  // Memoize the context value to prevent unnecessary re-renders of consumers
  const value = useMemo(() => ({ cart, addToCart }), [cart, addToCart]);

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};
