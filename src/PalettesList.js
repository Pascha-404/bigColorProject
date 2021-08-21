import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import './PalettesList.css';
import MiniPalette from './MiniPalette';

const styles = {
	root: {
		backgroundColor: 'blue',
		width: '100%',
		height: '100vh',
        paddingTop: '1.5rem',
        overflow: "hidden",
	},
	container: {
		width: '50%',
		margin: '0 auto',
		position: 'realtive',
	},
	nav: {
		color: 'white',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		'& span': {
			fontSize: '1.5rem',
		},
		'& a': { color: 'white' },
	},
};

export class PalettesList extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<span>React Colors</span>
						<Link to='/'>Create Palette</Link>
					</nav>
					{this.props.palettes.map(palette => (
						<MiniPalette {...palette} key={palette.id} />
					))}
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PalettesList);
