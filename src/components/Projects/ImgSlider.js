import React, { useState } from "react";
import "./ImgSlider.css";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function ImgSlider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
 
  const length = slides.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  const selectedImg = (id) => {
    setCurrentSlide(id - 1);
  };

  return (
    <div className="slider">
      <div className="slider-container">
        {slides.map((item, index) => { 
          return (
            <div className={index === currentSlide ? "slide active" : "slide"} key={index}>
              {index === currentSlide && (
                <img src={item.img} className="img" alt=""/>
              )}
            </div>
          );
        })} 
      </div>
      <div className="feed-selector">
        <BiChevronLeft className="side-arrow desktop" size={50} onClick={prevSlide} />
        {slides.map((i, index) => {
          return (
            <div className="sml-imgs-container" key={index}>
              <img src={i.img} className={index === currentSlide ? "active" : "not-active"} id={i.id} onClick={() => selectedImg(i.id)}/>
            </div>
          );
        })}
        <BiChevronRight className="side-arrow desktop" size={50} onClick={nextSlide} />
      </div>
    </div>
  );
}
