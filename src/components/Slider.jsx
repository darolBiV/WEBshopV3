import { useState } from "react";

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
    <div>
      <img
        src={images[currentIndex]}
        alt={title}
        style={{
          width: "400px",
          maxWidth: "100%",
          display: "block",
        }}
      />

      <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
        <button type="button" onClick={handlePrev}>
          Prev
        </button>
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Slider;