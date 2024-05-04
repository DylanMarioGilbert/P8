import React, { useEffect, useState } from "react";
import "./Accueil.css";
import Main from "../components/layout/main/Main";
import "./ApartmentPage.css";
import DescriptionCollapse from "../components/descriptioncollapse/DescriptionCollapse";
import ApartmentBanner from "../components/apartmentbanner/ApartmentBanner";
import ApartmentHeader from "../components/apartmentheader/ApartmentHeader";
import { Navigate, useParams } from "react-router-dom";

function ApartmentPage() {
  const { id } = useParams();
  const [flat, setFlat] = useState(null);
  useEffect(fetchApartmentData, [id]);

  function fetchApartmentData() {
    fetch("../data.json")
      .then((res) => res.json())
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === id);

        setFlat(flat);
      })
      .catch((err) => console.error);
  }
  if (flat === undefined) return <Navigate to="/landing404" />;
  if (flat === null) return <div>...Loading</div>;

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