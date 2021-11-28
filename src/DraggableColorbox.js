import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';

import styles from './styles/DraggableColorboxStyles';

const DraggableColorbox = SortableElement(props => {
	const { classes, name, deleteColor } = props;
	return (
		<div className={classes.root}>
			<div className={classes.content}>
				<span className={classes.name}>{name}</span>
				<DeleteIcon className={classes.deleteBtn} onClick={e => deleteColor(name)} />
			</div>
		</div>
	);
});

export default withStyles(styles)(DraggableColorbox);
