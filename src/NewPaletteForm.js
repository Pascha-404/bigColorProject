import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/NewPaletteFormStyles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

export class NewPaletteForm extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
	}

	handleDrawerOpen() {
		this.setState({ open: true });
	}

	handleDrawerClose() {
		this.setState({ open: false });
	}

	render() {
		const { classes } = this.props;
		const { open } = this.state;
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position='fixed'
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open,
					})}>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							onClick={this.handleDrawerOpen}
							edge='start'
							className={clsx(classes.menuButton, open && classes.hide)}>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' noWrap>
							Persistent drawer
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant='persistent'
					anchor='left'
					open={open}
					classes={{
						paper: classes.drawerPaper,
					}}>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<List>
						{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
					<Divider />
					<List>
						{['All mail', 'Trash', 'Spam'].map((text, index) => (
							<ListItem button key={text}>
								<ListItemIcon>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open,
					})}>
					<div className={classes.drawerHeader} />
					<Typography paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim
						praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.
						Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis
						convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
						commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est
						ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
						eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
						imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
						At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
						ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
					</Typography>
					<Typography paragraph>
						Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
						eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
						neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
						tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed
						odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
						ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida
						rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor.
						Habitant morbi tristique senectus et. Adipiscing elit duis tristique
						sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend.
						Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere
						sollicitudin aliquam ultrices sagittis orci a.
					</Typography>
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);