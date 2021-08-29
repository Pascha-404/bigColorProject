import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import Navbar from './Navbar';

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
		const { colors, paletteName, emoji, id } = this.props;
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
			<div className='Palette'>
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					handleChangeFormat={this.handleChangeFormat}
					format={format}
					open={open}
					showSlider
				/>

				<div className='Palette-colors'>{colorBoxes}</div>

				<footer className='Palette-footer'>
					{paletteName}
					<span className='emoji'>{emoji}</span>
				</footer>
			</div>
		);
	}
}

export default Palette;
