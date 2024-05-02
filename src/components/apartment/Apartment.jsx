import React from "react";
import "./Apartment.css";
import { NavLink } from "react-router-dom";

function Apartment(props) {

  const state={
      apartmentId:props.id
    };
  return (
    <NavLink to="/flat" state={state}>
      <div className="apartment">
        <img src={props.imageUrl} alt="" />
        <div className="apartment_subtitle">{props.title}</div>
      </div>
    </NavLink>
  );
}

export default Apartment;
