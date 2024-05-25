import React, { useState } from "react";
import "./ApartmentBanner.css";

function ApartmentBanner({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0);

  const getClassName = (i) => {
    return i === currentPicture ? "show" : "";
  };

  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    setCurrentPicture(
      (currentPicture - 1 + pictures.length) % pictures.length
    );
  };

  if (pictures.length === 1) {
    return (
      <div className="apartment_banner">
        <div className="image_container">
          <img src={pictures[0]} alt="" className="show"></img>
        </div>
      </div>
    );
  }

  return (
    <div className="apartment_banner">
      <div className="image_container">
        {pictures.map((pic, i) => (
          <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
        ))}
      </div>
      {pictures.length > 1 && (
        <>
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default ApartmentBanner;
