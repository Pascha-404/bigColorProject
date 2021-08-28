import React, { Component } from 'react';
import Palette from './Palette';
import './App.css';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router-dom';
import PalettesList from './PalettesList';

class App extends Component {
	findPalette(id) {
		return seedPalettes.find(palette => palette.id === id)
	}

	render() {
		return (
			<Switch>
				<Route exact path='/' render={(routeProps) => <PalettesList palettes={seedPalettes} {...routeProps}/>}></Route>
				<Route exact path="/palette/:id" render={(routeProps) => <Palette {...generatePalette(this.findPalette(routeProps.match.params.id))} />}></Route>
				<Route exact path="/palette/:paletteId/:colorId" render={(routeProps => <h1>...Searching {routeProps.match.params.colorId} on Palette {routeProps.match.params.paletteId}</h1>)}></Route>
			</Switch>
		);
	}
}

export default App;
