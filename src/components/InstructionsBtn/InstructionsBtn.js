import React, { Component } from "react";

// class InstructionsBtn extends Component {

//     instructActivate = props => {
//         // event.preventDefault();
//         // console.log(event);
//         alert("instructions button clicked");
//         // alert("instructions requested is " + {props.instReq});
//         console.log("instructions button clicked");
//     }
//     render() {
//         return <span onClick={this.instructActivate.bind(this)} className="navbar-brand btn btn-outline-light">Instructions</span>  
//     }
// }

const InstructionsBtn = (props) => (
    <span onClick={props.onClick} className="navbar-brand btn btn-outline-light">Instructions</span>
)

export default InstructionsBtn;