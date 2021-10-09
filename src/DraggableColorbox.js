import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableColorboxStyles';

class DraggableColorbox extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}
	handleClick() {
		this.props.deleteColor(this.props.name)
	}
	render() {
		const { classes, name} = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.content}>
					<span className={classes.name}>{name}</span>
					<DeleteIcon className={classes.deleteBtn} onClick={this.handleClick}/>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(DraggableColorbox);
