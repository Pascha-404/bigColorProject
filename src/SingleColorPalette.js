import React, { Component } from 'react';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {},
};

export class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this.state = { format: 'hex' };

		this.handleChangeFormat = this.handleChangeFormat.bind(this);
	}

	handleChangeFormat(e) {
		this.setState({ format: e.target.value });
	}
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Navbar format={'hex'} handleChangeFormat={this.handleChangeFormat} />
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
