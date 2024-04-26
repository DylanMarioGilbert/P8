import React from "react";
import DescriptionCollapse from "../components/apartmentgrid/DescriptionCollapse";
import Banner from "../components/banner/Banner";
import Main from "../components/layout/Main";

function About() {
  return (
    <Main>
      <Banner />
      <DescriptionCollapse title="Fiabilité" content="blabla" />
      <DescriptionCollapse title="Respect"/>
      <DescriptionCollapse title="Service"/>
      <DescriptionCollapse title="Sécurité"/>
    </ Main>
  );
}

export default About;
