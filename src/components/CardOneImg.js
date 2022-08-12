import React from "react";
import "../styles/CardOneImg.css";

function CardOneImg(props) {
  return (
    <div className="flex-container">
      <div className="content-left">
        <h2>{props.name}</h2>
        <p>{props.test}</p>
        <p id="google"> -via Google Review</p>
      </div>
      <div className="content-right">
        <img src={props.img} alt="progress-pic-after" />
      </div>
    </div>
  );
}

export default CardOneImg;
