import React from "react";

const Container = props => 
    <div className="container">
        <div className="row">
            <span className="col-3">
                {props.children}
            </span>
        </div>
    </div>;

export default Container;