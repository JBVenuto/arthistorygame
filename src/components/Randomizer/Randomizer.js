// Import React and the art object
import React from "react";
import art from "../../art.json";

console.log(art);

// Function that puts the array from art.json into a random order
const Randomizer = art => (
    let currentIndex = art.length;
    let tempValue;
    let randomIndex;

    // Check to make sure the index isn't 0
    while (0 !== currentIndex) {
        // Select an index
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        tempValue = art[currentIndex];
        art[currentIndex] = art[randomIndex];
        art[randomIndex] = tempValue;
    };
    console.log(art);
    return art;

);

export default Randomizer