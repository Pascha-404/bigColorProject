import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import { withStyles } from "@material-ui/styles"
import styles from "./styles/PaletteStyles"

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500, format: 'hex' };
		this.changeLevel = this.changeLevel.bind(this);

		this.handleChangeFormat = this.handleChangeFormat.bind(this);
	}

	handleChangeFormat(e) {
		this.setState({ format: e.target.value });
	}

	changeLevel(level) {
		this.setState({ level });
	}

	render() {
		const { level, open, format } = this.state;
		const { colors, paletteName, emoji, id, classes } = this.props;
		const colorBoxes = colors[level].map((color) => (
			<ColorBox
				background={color[format]}
				name={color.name}
				key={color.name}
				seeMoreUrl={`/palette/${id}/${color.id}`}
				seeMoreBtn
				fullPalette
			/>
		));

		return (
			<div className={classes.Palette}>
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					handleChangeFormat={this.handleChangeFormat}
					format={format}
					open={open}
					showSlider
				/>

				<div className={classes.Colors}>{colorBoxes}</div>

				<footer className={classes.Footer}>
					{paletteName}
					<span className='emoji'>{emoji}</span>
				</footer>
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
