import React, { Component } from 'react';
import Palette from './Palette';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router-dom';
import PalettesList from './PalettesList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
	findPalette(id) {
		return seedPalettes.find(palette => palette.id === id);
	}

	render() {
		return (
			<Switch>
				<Route
					exact
					path='/'
					render={routeProps => (
						<PalettesList palettes={seedPalettes} {...routeProps} />
					)}></Route>
				<Route exact path="/palette/new" render={routeProps => (<NewPaletteForm {...routeProps} />)}></Route>
				<Route
					exact
					path='/palette/:id'
					render={routeProps => (
						<Palette {...generatePalette(this.findPalette(routeProps.match.params.id))} />
					)}></Route>
				<Route
					exact
					path='/palette/:paletteId/:colorId'
					render={routeProps => (
						<SingleColorPalette
							{...routeProps}
							palette={generatePalette(
								this.findPalette(routeProps.match.params.paletteId)
							)}
							colorId={routeProps.match.params.colorId}
						/>
					)}></Route>
			</Switch>
		);
	}
}

export default App;
