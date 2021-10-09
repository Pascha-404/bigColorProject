import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableColorboxStyles';

class DraggableColorbox extends Component {
	render() {
		const { classes, name } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.content}>
					<span className={classes.name}>{name}</span>
					<DeleteIcon className={classes.deleteBtn} />
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(DraggableColorbox);
