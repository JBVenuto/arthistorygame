import React from "react";

const ArtCard = props => (
    <span className="card">
        <span className="img-container">
            <img alt={props.name} src={props.location} width="250px" height="250px"/>
        </span>
    </span>
);

export default ArtCard;