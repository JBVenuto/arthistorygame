import React from "react";
import Counter from "../Counter";

const ArtCard = props => (
    <div className="card">
        <a href="#">
            <div className="img-container">
                <img alt={props.name} src={props.location} id={props.id} width="250px" height="300px"/>
            </div>
        </a>
    </div>
);

export default ArtCard;