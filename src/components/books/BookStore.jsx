import BookCard from "./BookCard";

const BookStore = () => {
  const books = [
    {
      id: 1,
      title: "Clean Code",
      author: "Robert C. Martin",
      price: 30,
      image: "https://www.oreilly.com/library/cover/9780136083238/1200w630h/",
    },
    {
      id: 2,
      title: "The Pragmatic Programmer",
      author: "Andy Hunt",
      price: 40,
      image:
        "https://producthackers.com/wp-content/uploads/2020/11/thepragmaticprogrammer.png",
    },
    {
      id: 3,
      title: "Padre rico, padre pobre",
      author: "Robert Kiyosaki",
      price: 40,
      image:
        "https://contentv2.tap-commerce.com/cover/large/9789877253146_1.jpg?id_com=717",
    },
    {
      id: 4,
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      price: 25,
      image:
        "https://veryutils.com/image/cache/mpseller/customer-2522/javascript-from-zero-to-hero-page-0001-500x500.png",
    },
    {
      id: 5,
      title: "Habitos Atómicos",
      author: "James Clear",
      price: 25,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkGYb_DvEw723qhqytz6H0xW58om_ptNx0w&s",
    },
  ];

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
