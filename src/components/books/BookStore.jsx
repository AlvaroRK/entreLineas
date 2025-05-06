import { useState } from "react";
import BookCard from "./BookCard";
import data from "../../data.json";

const BookStore = () => {
  const [books] =useState(data)

  return (
    <main>
      <div className="cardContainer">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
};

export default BookStore;
