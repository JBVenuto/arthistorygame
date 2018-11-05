//Files to import
import React, { Component } from "react";
import art from "./art.json";
import ArtCard from "./components/ArtCard"
import Navbar from "./components/Navbar"
import Score from "./components/Score"
import Container from "./components/Container";
import Randomizer from "./components/Randomizer";
import Counter from "./components/Counter";
import arrayShuffle from "array-shuffle";
import InstructionsBtn from "./components/InstructionsBtn/InstructionsBtn";
import Instructions from "./components/Instructions/Instructions";


class App extends Component {
    state = {
        Randomizer,
        Counter,
        guessed: [],
        count:0,
        art,
        shuffledArt: arrayShuffle(art),
        instReq: false
    };

    //Handles what happens when a picture is clicked on
    btnClick = event => {
        // preventDefault();
        const btnId = event.target.id;
        console.log("selected art: " + btnId);
        // Reshuffle the order of the pictures
        this.setState({ shuffledArt: arrayShuffle(this.state.art) });
        console.log(this.state.shuffledArt);
        // Check to see if the clicked on picture has already beeen guessed
        let a = this.state.guessed.indexOf(btnId);
        if (a === -1) {
            this.state.guessed.push(btnId);
            this.setState({ count: this.state.count + 1 });
            console.log("Score: " + this.state.count);

        }
        else {
            alert("You guessed wrong");
            this.setState({ count: 0 })
            console.log(this.state.count);
        }
        console.log(this.state.guessed);
        
    }

    instructActivate = event => {
        // event.preventDefault();
        this.state.instReq = !this.state.instReq;
        this.setState({ instRequested: this.state.instReq });
    }


    // Go over art.json and rendor the art work on the page
    render() {
        return (
            <Container>
                <Navbar>
                    <Score 
                        count={this.state.count}
                    />
                    <InstructionsBtn 
                        instRequested={this.state.instReq}
                        onClick={this.instructActivate.bind(this)}
                    />
                </Navbar>
                <Instructions 
                    instRequested={this.state.instReq}
                />
                {this.state.shuffledArt.map( shuffledArt =>
                    <ArtCard 
                        id={shuffledArt.id}
                        key={shuffledArt.id}
                        name={shuffledArt.name}
                        location={shuffledArt.location}
                        onClick={this.btnClick.bind(this)}
                    />
                )}
            </Container>
        );
    }
}

export default App;