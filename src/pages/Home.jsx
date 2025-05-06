import React from "react";
import "./home.css";
import Item from "../components/items/Item";
import BookCard from "../components/books/BookCard";
import data from "../data.json";
import BooksCarrousel from "../components/carrousel/BooksCarrousel";
import { Link } from "react-router-dom";

const Home = () => {
  const librosDestacados = data.slice(2, 14);
  return (
    <main className="homeContainer">
      <section className="homeBanner">
        <h1 className="homeTitle">¡Bienvenido a Entre Líneas!</h1>
        <p>Descubrí los mejores libros al mejor precio</p>
      </section>
      <section className="homeItems">
        <Item text={"Envíos GRATIS"} subtext={"(segun zona y monto)"} />
        <Item text={"3 cuotas sin interés"} subtext={"(usando MercadoPago)"} />
        <Item
          text={"Podes retirar tu pedido en nuestro local"}
          subtext={"(sin cargo!)"}
        />
      </section>
      <section className="homeFeaturedBooks">
        <h2>Libros destacados</h2>
        <BooksCarrousel books={data} />
      </section>
      <section className="homeBooks">
        <h2>Nuestros libros</h2>
        <p className="homeBooksText">¡No te los pierdas!</p>
        <div className="booksContainer">
          {librosDestacados.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <Link to="/catalog" className="homeBooksLink">
          Ver más libros
        </Link>
      </section>
    </main>
  );
};

export default Home;
