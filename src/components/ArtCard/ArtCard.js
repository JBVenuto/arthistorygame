import React from "react";

const ArtCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.location} />
        </div>
    </div>
);

export default ArtCard;