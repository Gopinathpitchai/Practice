import React from "react";
import './Image.css';
import { useState } from "react";
import ani from '../Img/ani.png'
import Naruto from '../Img/naruto.png'

const images = [
  ani,
  Naruto,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious} className="carousel-button prev">
        ❮
      </button>
      <div className="carousel-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
      <button onClick={goToNext} className="carousel-button next">
        ❯
      </button>
    </div>
  );
};

export default Carousel;





