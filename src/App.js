//Files to import
import React, { Component } from "react";
import art from "./art.json";
import ArtCard from "./components/ArtCard"
import Container from "./components/Container";
import Randomizer from "./components/Randomizer";
import Clicked from "./components/Clicked";

class App extends Component {
    state = {
        Randomizer
    };

    // Go over art.json and rendor the art work on the page
    render() {
        return (
            <Container>
                {this.state.Randomizer.map(Randomizer => (
                    <ArtCard 
                        id={Randomizer.id}
                        key={Randomizer.id}
                        name={Randomizer.name}
                        onClick={Clicked}
                        location={Randomizer.location}
                    />
                ))}
            </Container>
        );
    }
}

export default App;