import React from "react";
import "./Main.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
