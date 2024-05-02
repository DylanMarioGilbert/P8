import React from "react";
import "./ApartmentHeader.css";

function ApartmentHeader({ flat }) {

  const name = flat.host.name;
  const [firstName, lastName] = name.split("");

  return (
    <div className="apartment_header">
      <div className="apartment_title">
        <h1>{flat.title}</h1>
        <h2>{flat.location}</h2>
        <div className="apartment_tags">
          {flat.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="appartment_owner">
        <div className="apartment_owner_details">
          <h3>
            {firstName}
            {lastName}
          </h3>
          <div className="apartment_owner_badge"></div>
          <img src={flat.host.picture} />
        </div>
        <div className="apartment_owner_stars">
          {[1, 2, 3, 4, 5].map((num) => (
            <span key={num} className={flat.rating >= num ? "on" : ""}>★</span>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ApartmentHeader;
