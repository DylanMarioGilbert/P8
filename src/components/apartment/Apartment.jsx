import React from "react";
import "./Apartment.css";
import { NavLink } from "react-router-dom";

function Apartment(props) {

  
  return (
    <NavLink to="/flat" state={{
      apartmentId:props.id
    }}>
      <div className="apartment">
        <img src={props.imageUrl} alt="" />
        <div className="apartment_subtitle">{props.title}</div>
      </div>
    </NavLink>
  );
}

export default Apartment;
