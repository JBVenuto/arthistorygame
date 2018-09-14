import React from "react";

const ArtCard = props => (
    <div className="card">
        <span className="img-container">
            <img alt={props.name} src={props.location} width="250px" height="250px"/>
        </span>
    </div>
);

export default ArtCard;