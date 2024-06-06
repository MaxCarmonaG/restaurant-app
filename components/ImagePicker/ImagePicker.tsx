"use client";

import { ChangeEventHandler, FC, useRef, useState } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

interface ImagePickerProps {
  label: string;
  name: string;
}

const ImagePicker: FC<ImagePickerProps> = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState('');
  const imageInput = useRef<HTMLInputElement>(null);

  const handlePickClick = () => {
    imageInput.current?.click();
  };

  const handleImageChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0];

    if(!file) return setPickedImage('');

    const fileReader = new FileReader();

    fileReader.onload = () => {
      const { result } = fileReader;
      if (typeof result === "string") setPickedImage(result);
    }

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage
            ? <Image
                src={pickedImage}
                alt="The image selected by the user."
                fill
              />
            : <p>No image picked yet.</p>}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  )
};

export default ImagePicker;
