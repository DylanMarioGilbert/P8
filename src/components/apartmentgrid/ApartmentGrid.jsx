import React, { useEffect, useState } from "react";
import "./ApartmentGrid.css";
import Apartment from "../apartment/Apartment";

function ApartmentGrid() {
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);

  function fetchApartments() {
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }

  return (
    <div className="grid">
      {apartments.map((apartment) => (
      <Apartment title={apartment.title} imageUrl={apartment.cover} id={apartment.id} />
      ))}
    </div>
  );
}

export default ApartmentGrid;
