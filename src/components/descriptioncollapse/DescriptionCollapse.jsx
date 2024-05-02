import React, {useState} from "react";
import "./DescriptionCollapse.css";

export default function DescriptionCollapse(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  }
  return (
    <div className="apartment_description">
      <p className="description_header">
        <span>{props.title}</span>
        <i className="fa-solid fa-chevron-down" onClick={showContent}></i>
      </p>
      {isContentVisible && <div className="description_content">{props.content}</div>}
    </div>
  );
}
