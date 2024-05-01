import React from "react";
import "./Accueil.css";
import Main from "../components/layout/main/Main";
import "./ApartmentPage.css";
import DescriptionCollapse from "../components/descriptioncollapse/DescriptionCollapse";
import ApartmentBanner from "../components/apartmentbanner/ApartmentBanner";
import ApartmentHeader from "../components/apartmentheader/ApartmentHeader";
import { useParams } from "react-router-dom";

function ApartmentPage() {
  const { id } = useParams();

  return (
    <Main>
      <div className="apartment-page">
        <ApartmentBanner />
        <ApartmentHeader />
      </div>
      <div className="apartment_area">
        <DescriptionCollapse
          title="Description"
          content={
            <>
              Vous serez à 50 m du canal Saint-martin où vous pourrez
              pique-niquer l'été et à côté de nombreux bars et restaurants. Au
              coeur de Paris avec 5 lignes de métro et de nombreux bus. Logement
              parfait pour les voyageurs en solo et les voyageurs d'affaires.
              Vous êtes à 1 station de la gare de l'est (7 minutes à pied).
            </>
          }
        />

        <DescriptionCollapse
          title="Equipement"
          content={
            <ul>
              <li>Climatisation</li>
              <li>Wi-fi</li>
              <li>Cuisine</li>
              <li>Espace de travail</li>
              <li>Fer à repasser</li>
              <li>Sèche-cheveux</li>
              <li>Cintres</li>
            </ul>
          }
        />
      </div>
    </Main>
  );
}

export default ApartmentPage;
