import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

import { withStyles } from '@material-ui/core/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import MiniPalette from './MiniPalette';
import styles from './styles/PalettesListStyles';

export class PalettesList extends Component {
	constructor(props) {
		super(props);
		this.state = { isDialogOpen: false, deletingId: '' };

		this.goToPalette = this.goToPalette.bind(this);
		this.closeDialog = this.closeDialog.bind(this);
		this.openDialog = this.openDialog.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}
	goToPalette(id) {
		this.props.history.push(`/palette/${id}`);
	}

	openDialog(id) {
		this.setState({ isDialogOpen: true, deletingId: id });
	}
	closeDialog() {
		this.setState({ isDialogOpen: false });
	}

	handleDelete() {
		this.props.deletePalette(this.state.deletingId);
		this.setState({ isDialogOpen: false, deletingId: '' });
	}

	render() {
		const { isDialogOpen } = this.state;
		const { classes, palettes } = this.props;

		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<span>React Colors</span>
						<Link to='/palette/new'>Create Palette</Link>
					</nav>
					<TransitionGroup className={classes.palettes}>
						{palettes.map(palette => (
							<CSSTransition key={palette.id} timeout={300} classNames='fade'>
								<MiniPalette
									{...palette}
									key={palette.id}
									goToPalette={this.goToPalette}
									openDialog={this.openDialog}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				</div>
				<Dialog
					onClose={this.closeDialog}
					aria-labelledby='simple-dialog-title'
					open={isDialogOpen}>
					<DialogTitle id='simple-dialog-title'>Delete The Palette?</DialogTitle>
					<List>
						<ListItem button onClick={this.handleDelete} key='confirm'>
							<ListItemAvatar>
								<Avatar
									style={{
										color: 'rgb(34, 150, 243)',
										backgroundColor: 'rgba(34, 150, 243, 0.3)',
									}}>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary='Confirm' />
						</ListItem>

						<ListItem button key='cancel' onClick={this.closeDialog}>
							<ListItemAvatar>
								<Avatar
									style={{
										color: 'rgba(214, 48, 49, 1)',
										backgroundColor: 'rgba(214, 48, 49, 0.3)',
									}}>
									<CloseIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary='Cancel' />
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(styles)(PalettesList);
