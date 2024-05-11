import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img
          src={`${window.location.origin}/logo-black.png`}
          alt="Logo"
          width="100"
        />
      </div>
      <div className="footer_text">
        © 2020 Kasa. All <br /> rights reserved
      </div>
    </div>
  );
}
export default Footer;