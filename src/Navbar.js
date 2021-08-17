import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
		this.handleClose = this.handleClose.bind(this);
		this.handleChangeFormat = this.handleChangeFormat.bind(this);
	}

	handleClose(e) {
		this.setState({ open: false });
	}

	handleChangeFormat(e) {
		this.setState({ open: true });
		this.props.handleChangeFormat(e)
	}

	render() {
		const { level, changeLevel, format} = this.props;
		const { open } = this.state;
		return (
			<header className='Navbar'>
				<div className='Navbar-logo'>
					<a href='/'>reactcolorpicker</a>
				</div>
				<div className='slider-container'>
					<span>Level: {level}</span>
					<Slider
						min={100}
						max={900}
						step={100}
						defaultValue={level}
						onAfterChange={changeLevel}
					/>
				</div>

				<div className="select-container">
					<Select value={format} onChange={this.handleChangeFormat}>
						<MenuItem value={'hex'}>HEX - #fffff</MenuItem>
						<MenuItem value={'rgb'}>RGB - rgb(255, 255, 255)</MenuItem>
						<MenuItem value={'rgba'}>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
					</Select>
				</div>

				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					open={open}
					autoHideDuration={3000}
					onClose={this.handleClose}
					message={<span id='message-id'>Changed format to {format.toUpperCase()}</span>}
					ContentProps={{ 'aria-describedby': 'message-id' }}
					action={
						<IconButton
							size='small'
							aria-label='close'
							color='inherit'
							onClick={this.handleClose}>
							<CloseIcon fontSize='small' />
						</IconButton>
					}
				/>
			</header>
		);
	}
}

export default Navbar;
