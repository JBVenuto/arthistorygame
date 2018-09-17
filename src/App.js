//Files to import
import React, { Component } from "react";
import art from "./art.json";
import ArtCard from "./components/ArtCard"
import Container from "./components/Container";
import Randomizer from "./components/Randomizer";
import Counter from "./components/Counter";

class App extends Component {
    state = {
        Randomizer,
        Counter
    };

    btnClick = event => {
        // preventDefault();
        const btnId = event.target.attributes.id;
        console.log(btnId);
        // this.state.Counter(Counter =>
        //         clickedId={btnId}
        // );
    }

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
                        onClick={this.btnClick.bind(this.id)}
                    />
                ))}
            </Container>
        );
    }
}

export default App;