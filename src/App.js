import React, { Component } from 'react'
import Palette from "./Palette"
import './App.css';
import seedPalettes from "./seedPalettes"
import {generatePalette} from "./colorHelpers"

class App extends Component {
  render() {
    console.log(generatePalette(seedPalettes[1]))
    return (
      <div className="App">
        <Palette {...seedPalettes[1]} />
      </div>
    );
  }
}

export default App;
