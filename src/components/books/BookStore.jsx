import React, { useState } from "react";
import BookCard from "./BookCard";
import { useCart } from "../../context/CartContext";

const BookStore = () => {
	
  const books = [
    {id: 1, title: "Clean Code", author: "Robert C. Martin", price: 30, image:'https://www.oreilly.com/library/cover/9780136083238/1200w630h/'},
	{id: 2, title: "The Pragmatic Programmer", author: "Andy Hunt", price: 40, image:'https://producthackers.com/wp-content/uploads/2020/11/thepragmaticprogrammer.png'},
	{id: 3, title: "The Pragmatic Programmer", author: "Andy Hunt", price: 40, image:'https://producthackers.com/wp-content/uploads/2020/11/thepragmaticprogrammer.png'},
    {id: 4, title: "You Don't Know JS", author: "Kyle Simpson", price: 25, image:'https://veryutils.com/image/cache/mpseller/customer-2522/javascript-from-zero-to-hero-page-0001-500x500.png'},
    {id: 5, title: "You Don't Know JS", author: "Kyle Simpson", price: 25, image:'https://veryutils.com/image/cache/mpseller/customer-2522/javascript-from-zero-to-hero-page-0001-500x500.png'},
  ];

  const { cart, getTotal } = useCart();

  return (
    <main>
      <div className="cardContainer">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <div className="cart">
        <h2>Cart</h2>
		<span>{cart.length != 0 ? cart.length :null}</span>
        {cart.length === 0 ? (
          <p>Empty cart</p>
        ) : (
          <ul className="mt-4">
            {cart.map((book, index) => (
              <li key={index} className="text-lg">
                {book.title} - ${book.price}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 text-xl font-bold">Total: ${getTotal()}</p>
      </div>
    </main>
  );
};

export default BookStore;
