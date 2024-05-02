import React, { useEffect, useState } from "react";
import "./Accueil.css";
import Main from "../components/layout/main/Main";
import "./ApartmentPage.css";
import DescriptionCollapse from "../components/descriptioncollapse/DescriptionCollapse";
import ApartmentBanner from "../components/apartmentbanner/ApartmentBanner";
import ApartmentHeader from "../components/apartmentheader/ApartmentHeader";
import { useLocation } from "react-router-dom";

function ApartmentPage() {
  const location = useLocation();
  console.log("location", location);
  console.log("our apartment id is:", location.state.apartmentId);
  const [flat, setFlat] = useState(null);
  useEffect(fetchApartmentData, []);

  function fetchApartmentData() {
    fetch("data.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find(
          (flat) => flat.id === location.state.apartmentId
        );
        setFlat(flat);
      })
      .catch(console.error);
  }
  if (flat == null) return <div>...Loading</div>;

  return (
    <Main>
      <div className="apartment-page">
        <ApartmentBanner pictures={flat.pictures} />
        <ApartmentHeader flat={flat} />
      </div>
      <div className="apartment_area">
        <DescriptionCollapse title="Description" content={flat.description} />

        <DescriptionCollapse
          title="Equipements"
          content={flat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </Main>
  );
}

export default ApartmentPage;
