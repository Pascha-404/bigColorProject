import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './styles/DraggableColorboxStyles';

class DraggableColorbox extends Component {
    render() {
	const { classes, name } = this.props;
	return (
		<div className={classes.root}>
			<div className={classes.content}>
				<span className={classes.name}>{name}</span>
				<div className={classes.deleteBtn}>
					<IconButton aria-label='delete' disabled color='primary'>
						<DeleteIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
}}

export default withStyles(styles)(DraggableColorbox);
