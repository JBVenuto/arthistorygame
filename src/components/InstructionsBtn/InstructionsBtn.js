import React, { Component } from "react";

class InstructionsBtn extends Component {

    instructActivate = event => {
        // event.preventDefault();
        console.log(event);
        alert("instructions button clicked");
        console.log("instructions button clicked");
    }
    render() {
        return <span onClick={this.instructActivate.bind(this)} className="navbar-brand btn btn-outline-light">Instructions</span>  
    }
}
export default InstructionsBtn;