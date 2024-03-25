"use client";
import { FC, MouseEventHandler, useState } from "react";
import classes from "./Slider.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface IImages {
  id: string;
  url: string;
  title: string;
}

interface ISlider {
  images: IImages[];
  font?: string;
}

export const Slider: FC<ISlider> = ({ images, font }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide: MouseEventHandler<HTMLDivElement> = (event) => {
    const index = Number(event.currentTarget.getAttribute("data-index"));
    setCurrentIndex(index);
  };

  return (
    <div className={classes.slider}>
      <div
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
        className={classes.sliderImage}
      >
        <div className={classes.leftArrow}>
          <IoIosArrowBack onClick={prevSlide} size={25} />
        </div>
        <div className={classes.rightArrow}>
          <IoIosArrowForward onClick={nextSlide} size={25} />
        </div>
        <div
          style={{ fontFamily: font }}
          className={classes.text}
        >
          {images[currentIndex].title}
        </div>
      </div>
    </div>
  );
};
