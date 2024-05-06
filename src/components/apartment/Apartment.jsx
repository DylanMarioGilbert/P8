import React from "react";
import "./Apartment.css";
import { NavLink } from "react-router-dom";

function Apartment({ id, imageUrl, title }) {
  return (
    <NavLink to={`/flat/${id}`}>
      <div className="apartment">
        <img src={imageUrl} alt="" />
        <div className="apartment_subtitle">{title}</div>
      </div>
    </NavLink>
  );
}

export default Apartment;