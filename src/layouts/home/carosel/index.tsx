import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const images = [
  "/images/Img-1.jpeg",
  "/images/Img-2.jpeg",
  "/images/Img-3.jpeg",
];

function CaroselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="carosel">
      <div className="carousel flex flex-col">
        <div className="w-full">
          <Image
            alt="carousel"
            width={1440}
            height={400}
            key={currentIndex}
            src={images[currentIndex]}
            className="h-48 carousel-images w-full object-cover"
          />
          <div className="slide_direction ">
            <div
              className="left bg-gray-500 h-10 w-10 rounded-full"
              onClick={handlePrevious}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 96 960 960"
                width="20"
              >
                <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
              </svg>
            </div>
            <div
              className="right bg-gray-500 h-10 w-10  rounded-full"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 96 960 960"
                width="20"
              >
                <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="carousel-indicator">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaroselSection;
