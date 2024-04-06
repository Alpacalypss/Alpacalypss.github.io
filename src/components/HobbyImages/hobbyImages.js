import React, { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react";
import "./hobbyImages.css";
import benedict from "../../images/benedict.jpg";
import fire from "../../images/fire.jpg";
import yard from "../../images/yard.jpg";
import kafta from "../../images/kafta.jpg";
import pad from "../../images/pad-thai.jpg";

const images = [
  { url: benedict, alt: "Cross-section of eggs benedict w/ runny yolk" },
  { url: fire, alt: "A 4 leaf clover of fire" },
  { url: yard, alt: "Flagstone path in my yard" },
  { url: kafta, alt: "A beautiful malai kafta w/ pita bread" },
  {
    url: pad,
    alt: "A countertop skillet full of pad thai, garnished with peanuts and thai basil",
  },
];

const HobbyImages = () => {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPreviousImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section id="hobby" aria-label="Image-Slider">
      <div className="images">
        {images.map(({ url, alt } = images) => (
          <img
            key={url}
            src={url}
            alt={alt}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPreviousImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div className="img-slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HobbyImages;
