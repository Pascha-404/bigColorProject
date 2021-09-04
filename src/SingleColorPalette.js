import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import styles from "./styles/SingleColorPaletteStyles"

export class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this.state = { format: 'hex' };
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		this.handleChangeFormat = this.handleChangeFormat.bind(this);
	}

	handleChangeFormat(e) {
		this.setState({ format: e.target.value });
	}

	gatherShades(palette, colorToFilter) {
		let shades = [];
		let allColors = palette.colors;
		for (let key in allColors) {
			shades = shades.concat(allColors[key].filter(color => color.id === colorToFilter));
		}
		return shades.slice(1);
	}

	render() {
		const { format } = this.state;
		const { classes, palette, match} = this.props;
		const colorBoxes = this._shades.map((color, idx) => (
			<ColorBox name={color.name} background={color[format]} key={color.name + idx} />
		));
		return (
			<div className={classes.root}>
				<Navbar format={format} handleChangeFormat={this.handleChangeFormat} />

				<div className={classes.colorBoxes}>
					{colorBoxes}
					<div className={classes.goBackBox}>
						<Link className={classes.goBackBtn} to={`/palette/${match.params.paletteId}`}>Go Back</Link>
					</div>
				</div>

				<footer className={classes.footer}>
					{palette.paletteName}
					<span className={classes.emoji}>{palette.emoji}</span>
				</footer>
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
