//Files to import
import React, { Component } from "react";
import art from "./art.json";
import ArtCard from "./components/ArtCard"
import Container from "./components/Container";
import Randomizer from "./components/Randomizer";
// import Counter from "./components/Counter";
import Navbar from ".components/Navbar";

class App extends Component {
    state = {
        Randomizer,
        Counter
    };

    // Go over art.json and rendor the art work on the page
    render() {
        return (
            <Container>
            {/* //     {this.state.Counter(Counter => ( */}
            //         <Navbar 
            //             count={Counter.score}                      
                    />
            //     ))}
                {this.state.Randomizer.map(Randomizer => (
                    <ArtCard 
                        id={Randomizer.id}
                        key={Randomizer.id}
                        name={Randomizer.name}
                        location={Randomizer.location}
                        // onClick={Counter(Counter =>
                        //     {this.state.Randomizer})}
                    />
                ))}
            </Container>
        );
    }
}

export default App;