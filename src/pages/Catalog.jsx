import React from "react";
import BookStore from "../components/books/BookStore";
import { CartProvider } from "../context/CartContext";

const Catalog = () => {
  return (
      <CartProvider>
        <BookStore />
      </CartProvider>
  );
};

export default Catalog;
