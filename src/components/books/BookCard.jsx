import React from "react";
import { useCart } from "../../context/CartContext";
import "./bookCard.css";

const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={book.image} alt="Book cover" />
      <div className="cardContent">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>${book.price}</p>
      </div>
      <button onClick={() => addToCart(book)}>Añadir al carrito</button>
    </div>
  );
};

export default BookCard;
