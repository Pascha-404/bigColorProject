import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		width: '100%',
		// height: '150px',
		height: "100%",
		backgroundColor: 'white',
		display: 'inline-block',
		borderRadius: '5px',
		padding: "0.4rem",
	},
	colors: {
		backgroundColor: 'grey',
		width: "100%",
		height: "100%",
	},
	miniColorBoxes: {
		width: "20%",
		height: "25%",
		display: "inline-block",
	},
	title: {
		width: '100%',
	},
	emoji: {},
};

function MiniPalette(props) {
	const { classes, emoji, colors, paletteName } = props;
	return (
		<div className={classes.root}>
			<div className={classes.colors}>
				{colors.map(color => {
					return (
						<div
							className={classes.miniColorBoxes}
							key={color.color}
							style={{ backgroundColor: color.color }}></div>
					);
				})}
			</div>
			<div className={classes.title}>
				{paletteName}
				<span className={classes.emoji}>{emoji}</span>
			</div>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
