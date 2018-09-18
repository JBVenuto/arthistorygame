//Files to import
import React, { Component } from "react";
import art from "./art.json";
import ArtCard from "./components/ArtCard"
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
        art
    };

    btnClick = event => {
        // preventDefault();
        const btnId = event.target.id;
        console.log(btnId);
        // this.state.guessed.push(btnId);
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

    // shuffle = (art) => {
    //     console.log(art);
    //     let Randomizer = arrayShuffle(art);
    //     console.log(Randomizer);
    //     // return Randomizer;
    //     // export default Randomizer;
    // }


    // Go over art.json and rendor the art work on the page
    render() {
        return (
            <Container>
                {this.state.Randomizer.map(Randomizer => (
                    <ArtCard 
                        id={Randomizer.id}
                        key={Randomizer.id}
                        name={Randomizer.name}
                        location={Randomizer.location}
                        onClick={this.btnClick.bind(this)}
                    />
                ))}
            </Container>
        );
    }
}

export default App;