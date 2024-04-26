import React from "react";
import "./Accueil.css";
import Main from "../components/layout/Main";
import "./ApartmentPage.css";
import DescriptionCollapse from "../components/apartmentgrid/DescriptionCollapse";
import ApartmentBanner from "../components/apartmentgrid/ApartmentBanner";
import ApartmentHeader from "../components/apartmentgrid/ApartmentHeader";
import { useParams } from "react-router-dom";

function ApartmentPage() {
  const { id } = useParams();

  return (
    <Main>
      <div className="apartment-page">
        <ApartmentBanner />
        <ApartmentHeader />
      </div>
      <div className="apartment_description_area">
        <DescriptionCollapse
          title="Equipement"
          content={
            <ul>
              <li>wi-fi</li>
              <li>micro-ondes</li>
            </ul>
          }
        />

        <DescriptionCollapse />
      </div>
    </Main>
  );
}

export default ApartmentPage;