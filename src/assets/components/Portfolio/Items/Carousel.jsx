import React, { useState } from 'react';
import './Carousel.css'
// Reusable Carousel
const Carousel = function({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel-container">
      <div className="carousel-view">
        <img
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          className="carousel-image"
        />
        {images.length > 1 && (
          <>
            <button
              className="carousel-btn prev"
              onClick={prevSlide}
              aria-label="Previous screenshot"
            >
              &#10094;
            </button>
            <button
              className="carousel-btn next"
              onClick={nextSlide}
              aria-label="Next screenshot"
            >
              &#10095;
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel
