import React from "react";
import "./DescriptionCollapse.css";

export default function DescriptionCollapse({ content, title }) {
  return (
    <div className="apartment_description">
      <p className="description_header">
        <span>{title}</span>
        <i className="fa-solid fa-chevron-down"></i>
      </p>
      <div className="description_content">{content}</div>
    </div>
  );
}
