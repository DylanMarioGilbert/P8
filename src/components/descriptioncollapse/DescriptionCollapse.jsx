import React, { useState } from "react";
import "./DescriptionCollapse.css";

export default function DescriptionCollapse({ content, title }) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="apartment_description">
      <p className="description_header">
        <span>{title}</span>
        <i
          className={`fa-solid fa-chevron-${isContentVisible ? "down" : "up"}`}
          onClick={showContent}
        ></i>
      </p>
      {isContentVisible && (
        <div className="description_content">{content}</div>
      )}
    </div>
  );
}
