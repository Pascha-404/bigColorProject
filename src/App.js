import React, { Component } from 'react';
import Palette from './Palette';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router-dom';
import PalettesList from './PalettesList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(localStorage.getItem('colorPalettes'));
		this.state = { palettes: savedPalettes || seedPalettes };
		this.savePalette = this.savePalette.bind(this);
	}

	syncLocalStorage() {
		localStorage.setItem('colorPalettes', JSON.stringify(this.state.palettes));
	}

	findPalette(id) {
		return this.state.palettes.find(palette => palette.id === id);
	}

	savePalette(newPalette) {
		this.setState(
			curState => ({ palettes: [...curState.palettes, newPalette] }),
			this.syncLocalStorage
		);
	}

	render() {
		const { palettes } = this.state;
		return (
			<Switch>
				<Route
					exact
					path='/'
					render={routeProps => (
						<PalettesList palettes={palettes} {...routeProps} />
					)}></Route>

				<Route
					exact
					path='/palette/new'
					render={routeProps => (
						<NewPaletteForm
							{...routeProps}
							savePalette={this.savePalette}
							palettes={palettes}
						/>
					)}></Route>
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
