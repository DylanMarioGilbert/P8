import React from "react";
import "./ApartmentBanner.css";

function ApartmentBanner(props) {
  return (
    <div className="apartment_banner">
      <img src={props.imageUrl} />
    </div>
  );
}
export default ApartmentBanner;
