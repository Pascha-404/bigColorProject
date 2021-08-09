import React, { Component } from 'react';
import Palette from './Palette';
import './App.css';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';



class App extends Component {
  
	render() {
		const palette = generatePalette(seedPalettes[1]);
		return (
      <div className='App'>
        
				<Palette {...palette} />
			</div>
		);
	}
}

export default App;
