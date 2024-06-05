"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

import classes from "./ImageSlideShow.module.css";
import { getImages } from "./ImageSlideShow.data";


const images = getImages();

const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map(({ id, image, alt }, index) => (
        <Image
          key={id}
          src={image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={alt}
        />
      ))}
    </div>
  );
};

export default ImageSlideshow;
