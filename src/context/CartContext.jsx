import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const getTotal = () => {
    return cart.reduce((total, book) => total + book.price, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};