import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/PalettesListStyles';

import MiniPalette from './MiniPalette';

export class PalettesList extends Component {
	constructor(props) {
		super(props);
		this.goToPalette = this.goToPalette.bind(this);
	}
	goToPalette(id) {
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
								goToPalette={this.goToPalette}
								deletePalette={this.props.deletePalette}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PalettesList);
