import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		backgroundColor: 'black',
		width: '30px',
		height: '30px',
	},
};

function MiniPalette(props) {
	console.log(props);
	const { classes, emoji, colors, paletteName } = props;
	return (
		<div className={classes.root}>
			<h2>MiniPalette</h2>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
