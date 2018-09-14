//Files to import
import React, { Component } from "react";
import art from "./art.json";
import ArtCard from "./components/ArtCard"

class App extends Component {
    state = {
        art
    };

    // Go over art.json and rendor the art work on the page
    render() {
        return (
            <Container>
                {this.state.art.map(art => (
                    <ArtCard 
                        id={art.id}
                        key={art.id}
                        name={art.name}
                        location={art.location}
                    />
                ))}
            </Container>
        );
    }
}

export default App;