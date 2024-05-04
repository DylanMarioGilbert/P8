import React from "react";
import "./Accueil.css";
import Banner from "../components/banner/Banner";
import ApartmentGrid from "../components/apartmentgrid/ApartmentGrid";
import Main from "../components/layout/main/Main";

function App() {
  return (
    <Main>
      <Banner />
      <ApartmentGrid />
    </Main>
  );
}

export default App;
