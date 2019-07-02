import React from "react";
import "./Container.css";

const Container = props => 
    <div className="container justify-content-center">
        {/* <div className="row"> */}
            {/* <div className="col-3"> */}
                {props.children}
            {/* </div> */}
        {/* </div> */}
    </div>;

export default Container;