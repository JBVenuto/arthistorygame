//Files to import
import React, { Component } from "react";
import art from "./art.json";
import ArtCard from "./components/ArtCard/ArtCard"
import Container from "./components/Container/Container";
import Randomizer from "./"

class App extends Component {
    state = {
        Randomizer
    };

    // Go over art.json and rendor the art work on the page
    render() {
        return (
            <Container>
                {this.state.Randomizer.map(art => (
                    <ArtCard 
                        id={Randomizer.id}
                        key={Randomizer.id}
                        name={Randomizer.name}
                        location={Randomizer.location}
                    />
                ))}
            </Container>
        );
    }
}

export default App;