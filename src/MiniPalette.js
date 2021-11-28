import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/MiniPaletteStyles';

class MiniPalette extends PureComponent {
	constructor(props) {
		super(props);
		this.handleGoTo = this.handleGoTo.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleGoTo() {
		this.props.goToPalette(this.props.id);
	}

	handleDelete(evt) {
		evt.stopPropagation();
		this.props.openDialog(this.props.id);
	}

	render() {
		const { classes, emoji, colors, paletteName } = this.props;
		const miniBoxes = colors.map(color => {
			return (
				<div
					className={classes.miniColorBoxes}
					key={color.name}
					style={{ backgroundColor: color.color }}></div>
			);
		});
		return (
			<div className={classes.root} onClick={this.handleGoTo}>
				<DeleteIcon className={classes.deleteBtn} onClick={this.handleDelete} />

				<div className={classes.colors}>{miniBoxes}</div>

				<h5 className={classes.title}>
					{paletteName}
					<span className={classes.emoji}>{emoji}</span>
				</h5>
			</div>
		);
	}
}

export default withStyles(styles)(MiniPalette);
