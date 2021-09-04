import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from "./styles/MiniPaletteStyles"

function MiniPalette(props) {
	const { classes, emoji, colors, paletteName, handleGoTo} = props;
	const miniBoxes = colors.map(color => {
		return (
			<div
				className={classes.miniColorBoxes}
				key={color.name}
				style={{ backgroundColor: color.color }}></div>
		);
	});
	return (
		<div className={classes.root} onClick={handleGoTo}>  
			<div className={classes.colors}>{miniBoxes}</div>
			<h5 className={classes.title}>
				{paletteName}
				<span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
