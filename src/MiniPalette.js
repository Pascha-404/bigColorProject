import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		width: '100%',
		backgroundColor: 'white',
		display: 'inline-block',
		borderRadius: '5px',
		padding: '0.5rem',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	colors: {
		backgroundColor: 'grey',
		width: '100%',
		height: '150px',
		borderRadius: '5px',
		overflow: 'hidden',
	},
	miniColorBoxes: {
		width: '20%',
		height: '25%',
		display: 'inline-block',
		margin: '0 auto',
		position: 'relative',
		marginBottom: '-3.5px',
	},
	title: {
		fontSize: '1rem',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '0',
		paddingTop: '0.5rem',
		color: 'black',
	},
	emoji: {
		fontSize: '1.5rem',
		marginLeft: '0.5rem',
	},
};

function MiniPalette(props) {
	const { classes, emoji, colors, paletteName } = props;
	const miniBoxes = colors.map(color => {
		return (
			<div
				className={classes.miniColorBoxes}
				key={color.name}
				style={{ backgroundColor: color.color }}></div>
		);
	});
	return (
		<div className={classes.root}>
			<div className={classes.colors}>{miniBoxes}</div>
			<h5 className={classes.title}>
				{paletteName}
				<span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
