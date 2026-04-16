import { useState } from "react";
import "./Slider.css";

function Slider({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
      <img
        src={images[currentIndex]}
        alt={title}
        className="slider-image"
      />

      <div className="slider-controls">
        <button type="button" className="slider-button" onClick={handlePrev}>
          Prev
        </button>
        <button type="button" className="slider-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;