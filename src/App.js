import React, { Component } from 'react';
import Palette from './Palette';
import seedPalettes from './seedPalettes';
import { generatePalette } from './colorHelpers';
import { Route, Switch } from 'react-router-dom';
import PalettesList from './PalettesList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Page from './Page';

class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(localStorage.getItem('colorPalettes'));
		this.state = { palettes: savedPalettes || seedPalettes };
		this.savePalette = this.savePalette.bind(this);
		this.deletePalette = this.deletePalette.bind(this);
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

	deletePalette(id) {
		const newPaletteList = this.state.palettes.filter(palette => palette.id !== id);
		this.setState({ palettes: newPaletteList }, this.syncLocalStorage);
	}

	render() {
		const { palettes } = this.state;
		return (
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition key={location.key} timeout={500} classNames='page'>
							<Switch location={location}>
								<Route
									exact
									path='/'
									render={routeProps => (
										<Page>
											<PalettesList
												palettes={palettes}
												deletePalette={this.deletePalette}
												{...routeProps}
											/>
										</Page>
									)}></Route>
								<Route
									exact
									path='/palette/new'
									render={routeProps => (
										<Page>
											<NewPaletteForm
												{...routeProps}
												savePalette={this.savePalette}
												palettes={palettes}
											/>
										</Page>
									)}></Route>
								<Route
									exact
									path='/palette/:id'
									render={routeProps => (
										<Page>
											<Palette
												{...generatePalette(this.findPalette(routeProps.match.params.id))}
											/>
										</Page>
									)}></Route>
								<Route
									exact
									path='/palette/:paletteId/:colorId'
									render={routeProps => (
										<Page>
											<SingleColorPalette
												{...routeProps}
												palette={generatePalette(
													this.findPalette(routeProps.match.params.paletteId)
												)}
												colorId={routeProps.match.params.colorId}
											/>
										</Page>
									)}></Route>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		);
	}
}

export default App;
