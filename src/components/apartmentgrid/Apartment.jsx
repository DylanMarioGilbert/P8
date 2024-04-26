import React from "react";
import "./Apartment.css";
import { NavLink } from "react-router-dom";

function Apartment() {
  return (
    <NavLink to="/flat/id1234">
      <div className="apartment">
        <div className="apartment_subtitle">Titre de la location</div>
      </div>
    </NavLink>
  );
}

export default Apartment;
