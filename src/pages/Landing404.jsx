import React from "react";
import "./Accueil.css";
import "./Landing404.css";
import Main from "../components/layout/Main";

function Landing404() {
  return (
    <Main>
      <div className="error-page">
        <h1>404</h1>
        <h2>Oops ! La page que vous demandez n'existe pas </h2>
        <h3>Retourner sur la page d'accueil</h3>
      </div>
    </Main>
  );
}

export default Landing404;
