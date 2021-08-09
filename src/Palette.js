import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500 };
		this.changeLevel = this.changeLevel.bind(this);
		this.wrapper = React.createRef();
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
				<Slider
					ref={this.wrapper}
					min={100}
					max={900}
					step={100}
					defaultValue={this.state.level}
					onAfterChange={this.changeLevel}
				/>
				<div className='Palette-colors'>{colorBoxes}</div>
			</div>
		);
	}
}

export default Palette;
