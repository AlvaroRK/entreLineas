import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './booksCarrousel.css';

const BooksCarrousel = ({ books }) => {
  return (
    <div className="book-carousel">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {books.slice(0, 6).map((book) => (
          <SwiperSlide key={book.id}>
            <div className="book-card">
              <img src={book.image} alt={book.title} className="book-img" />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BooksCarrousel