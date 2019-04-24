import React from "react";
import "./style.css";
function DigimonCard(props) {
  return (
    <div className="card">
      <div>
        <img id={props.id} onClick={() => props.digimonSelect(props.id)} alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default DigimonCard;
