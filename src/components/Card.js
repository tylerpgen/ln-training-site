import React from "react";
import "../styles/Card.css";

function Card(props) {
  return (
    <div className="flex-container-two">
      <div className="content-left">
        <h2>{props.name}</h2>
        <p>{props.test}</p>
        <p id="google"> -via Google Review</p>
      </div>
      <div className="content-middle">
        <img src={props.img} alt="progress-pic" />
      </div>
      <div className="content-right">
        <img src={props.img2} alt="progress-pic-after" />
      </div>
    </div>
  );
}

export default Card;
