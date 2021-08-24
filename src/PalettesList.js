import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import MiniPalette from './MiniPalette';

const styles = {
	root: {
		backgroundColor: 'blue',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	container: {
		width: '50%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
	},
	nav: {
		width: '100%',
		color: 'white',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: '1rem',
		paddingBottom: '1rem',
		'& span': {
			fontSize: '1.5rem',
		},
		'& a': { color: 'white' },
	},
	palettes: {
		width: '100%',
		boxSizing: 'border-box',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '5%',
	},
};

export class PalettesList extends Component {
	handleGoTo(id) {
		this.props.history.push(`/palette/${id}`);
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<span>React Colors</span>
						<Link to='/'>Create Palette</Link>
					</nav>
					<div className={classes.palettes}>
						{this.props.palettes.map(palette => (
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
