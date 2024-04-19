import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src="logo.png" alt="Logo" width="200" />
      </div>
      <div>Accueil</div>
      <div>A propos</div>
    </nav>
  );
}

export default Navbar;
