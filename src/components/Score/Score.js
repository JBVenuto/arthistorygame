import React from "react";

const Score = props => (
    <nav className="navbar navbar-dark bg-dark">
    <span className="navbar-brand">
      Current Score: {props.count}
    </span>
  </nav>
  
);

export default Score;