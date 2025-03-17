import React, { useState } from 'react'
import BookCard from './BookCard'

const BookStore = () => {
    const books = [
        { id: 1, title: "Clean Code", author: "Robert C. Martin", price: 30 },
        { id: 2, title: "The Pragmatic Programmer", author: "Andy Hunt", price: 40 },
        { id: 3, title: "You Don't Know JS", author: "Kyle Simpson", price: 25 },
    ];

    const [cart, setCart] = useState([]);

    const addToCart = (book) => {
        setCart([...cart, book]);
    };

    const getTotal = () => {
        return cart.reduce((acc, book) => acc + book.price, 0);
    };

  return (
    <div>
        <h1>Catalog</h1>

        <div className="bookMap">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} onAddToCart={addToCart} />
                ))}
            </div>

        <div className='cart'>
            <h2>Cart</h2>
            {cart.length === 0 ? <p>Empty cart</p> : (
          <ul className="mt-4">
            {cart.map((book, index) => (
              <li key={index} className="text-lg">{book.title} - ${book.price}</li>
            ))}
          </ul>
        )}
        <p className="mt-4 text-xl font-bold">Total: ${getTotal()}</p>
        </div>
    </div>
  )
}

export default BookStore