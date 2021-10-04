import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/PalettesListStyles"

import MiniPalette from './MiniPalette';

export class PalettesList extends Component {
	handleGoTo(id) {
		this.props.history.push(`/palette/${id}`);
	}

	render() {
		const { classes, palettes } = this.props;

		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<span>React Colors</span>
						<Link to='/palette/new'>Create Palette</Link>
					</nav>
					<div className={classes.palettes}>
						{palettes.map(palette => (
							<MiniPalette
								{...palette}
								key={palette.id}
								handleGoTo={() => this.handleGoTo(palette.id)}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PalettesList);
