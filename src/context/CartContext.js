import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  const updateCounter = (newCount) => {
    setCartCount(newCount)
  }

  return (
    <CartContext.Provider value={{ cartCount, updateCounter }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
