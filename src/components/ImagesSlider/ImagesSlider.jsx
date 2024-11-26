// ImagesSlider.jsx
import React, { useState } from "react";
import styles from "./ImagesSlider.module.css";

const ImagesSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className={styles.sliderContainer}>
      <button onClick={prevSlide} className={styles.sliderButton}>
        &#10094;
      </button>
      <div className={styles.sliderWrapper}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`${styles.sliderImage} ${
              index === currentIndex ? styles.active : ""
            }`}
          />
        ))}
      </div>
      <button onClick={nextSlide} className={styles.sliderButton}>
        &#10095;
      </button>
    </div>
  );
};

export default ImagesSlider;
