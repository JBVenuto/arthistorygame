import React, { Component } from "react";

// class Instructions extends Component {
//     state = {
//         instReq: false
//     }

//     // instClicked = event => {
//     //     alert("Instruction request was " + this.state.instReq);
//     //     this.state.instReq = !this.state.instReq;
//     //     alert("Instruction request is now " + this.state.instReq);
//     // }

//     instClicked = event => {
//         alert("Instruction request was " + this.state.instReq);
//         this.state.instReq = !this.state.instReq;
//         alert("Instruction request is now " + this.state.instReq);
//     }

//     request() {
//         return (
//             <div>
//                 <p>Test your memory by trying to click on each picture without clicking on any picture more than once. They pictures will change their order after each click.</p>
//                 <button onClick={this.instClicked.bind(this)} className="navbar-brand btn btn-outline-light">Instructions</button>
//             </div>
//         )
//     }

//     notActive() {
//         return (
//             <button onClick={this.instClicked.bind(this)} className="navbar-brand btn btn-outline-light">Instructions</button>
//         )
//     }

//     activeChecker() {
//         if (this.state.instReq) {
//             return <this.request />;
//         }
//         else {
//             return <notActive />;
//         }
//     }

//     render() {
//         return <this.activeChecker />;
//     }

// }

const Instructions = (props) => {
    if (props.instRequested) { 
        return (
            <div>
                <p>Test your memory by trying to click on each picture without clicking on any picture more than once. They pictures will change their order after each click.</p>
            </div>
        )
    }
    else {
        return <div></div>
    }
}
export default Instructions;