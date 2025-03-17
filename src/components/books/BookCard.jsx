import React from 'react'

const BookCard = ({ book, onAddToCart }) => {
  
  return (
    <div className='cardContainer'>
        <div className='card'>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.price}</p>
            <button onClick={() => onAddToCart(book)}>Add to cart</button>
        </div>
    </div>
  )
}

export default BookCard