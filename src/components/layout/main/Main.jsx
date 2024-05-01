import React from "react";
import "./Main.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Main({ children }) {
  return (
    <div className="main">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Main;
