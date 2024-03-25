"use client";
import React, { useState } from "react";
import classes from "./Header.module.scss";
import images from "./images.json";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export const Header = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImageHandler = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex((prevState) => prevState + 1);
    }
  };

  const prevImageHandler = () => {
    if (imageIndex > 0) {
      setImageIndex((prevState) => prevState - 1);
    }
  };

  return (
    <div className={classes.header}>
      <img src={`${images[imageIndex].url}`} alt="header" />
      <div className={classes.container}>
        <div className={classes.btnLeft} onClick={prevImageHandler}>
          <FaArrowAltCircleLeft />
        </div>
        <div className={classes.btnRight} onClick={nextImageHandler}>
          <FaArrowAltCircleRight />
        </div>
      </div>
    </div>
  );
};
