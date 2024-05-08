import React from "react";
import "./Main.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Main({ children }) {
  return (
    <div className="main">
      <Navbar />
      <div className="children_container">{children}</div>
      <Footer />
    </div>
  );
}

export default Main;