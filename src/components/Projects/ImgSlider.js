import React, { useState, useEffect } from "react";
import "./ImgSlider.css";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function ImgSlider({ slides, info }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const length = slides.length;
  const slideTimer = 8; //seconds;

  useEffect(() => {
    seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
  }, [seconds]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    if (seconds === 0) {
      setSeconds(slideTimer);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    if (seconds === 0) {
      setSeconds(slideTimer);
    }
  };

  const selectedImg = (id) => {
    setCurrentSlide(id - 1);
  };

  if (seconds === 0) {
    nextSlide();
  }

  return (
    <div className="slider">
      <div className="slider-container">
        {slides.map((feed, index) => {
          return (
            <div className={index === currentSlide ? "slide active" : "slide"} key={index}>
              {index === currentSlide && (
                <img src={feed.imgSrc} id={feed.id} className="img" alt={feed.description} />
              )}
            </div>
          );
        })}
      </div>
      <div className="feed-selector">
        <BiChevronLeft className="side-arrow desktop" onClick={prevSlide} />
        {slides.map((feed, index) => {
          return (
            <div className="sml-imgs-container" key={index}>
              <img src={feed.imgSrc} className={index === currentSlide ? "active" : null} id={feed.id} onClick={() => selectedImg(feed.id)}/>
            </div>
          );
        })}
        <BiChevronRight className="side-arrow desktop" onClick={nextSlide} />
      </div>
      <div className="side-arrows-mobile">
        <BiChevronLeft className="side-arrow" onClick={prevSlide} />
        <BiChevronRight className="side-arrow" onClick={nextSlide} />
      </div>
    </div>
  );
}
