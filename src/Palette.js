import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import Navbar from "./Navbar"

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500 };
		this.changeLevel = this.changeLevel.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}
	render() {
		const { level } = this.state;
		const { colors } = this.props;
		const colorBoxes = colors[level].map((color, idx) => (
			<ColorBox background={color.hex} name={color.name} key={idx} />
		));

		return (
			<div className='Palette'>
				<Navbar level={level} changeLevel={this.changeLevel} />
				
				<div className='Palette-colors'>{colorBoxes}</div>
			</div>
		);
	}
}

export default Palette;
