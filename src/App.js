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


class App extends Component {
    state = {
        Randomizer,
        Counter,
        guessed: [],
        count:0,
        art,
        shuffledArt: arrayShuffle(art)
    };

    //Handles what happens when a picture is clicked on
    btnClick = event => {
        // preventDefault();
        const btnId = event.target.id;
        console.log(btnId);
        // Reshuffle the order of the pictures
        this.state.shuffledArt = arrayShuffle(this.state.art);
        console.log(this.state.shuffledArt);
        // Check to see if the clicked on picture has already beeen guessed
        let a = this.state.guessed.indexOf(btnId);
        if (a == -1) {
            this.state.guessed.push(btnId);
            this.state.count++
            console.log(this.state.count);

        }
        else {
            alert("You guessed wrong");
            this.state.count = 0;
            console.log(this.state.count);
        }
        console.log(this.state.guessed);
        
    }


    // Go over art.json and rendor the art work on the page
    render() {
        return (
            <Container>
                {/* <Navbar> */}
                    <Score 
                        count={this.state.count}
                    />
                {/* </Navbar> */}
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