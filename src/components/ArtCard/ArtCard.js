import React from "react";
import Counter from "../Counter";
import "./ArtCard.css";

const ArtCard = props => (
    <div className="card">
        
            <div className="img-container">
                <img alt={props.name} src={props.location} id={props.id} onClick={props.onClick} width="250px" height="300px"/>
            </div>
        
    </div>
);

export default ArtCard;