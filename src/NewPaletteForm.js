import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './styles/NewPaletteFormStyles';

function NewPaletteForm() {
	const classes = styles();
	const [open, setOpen] = React.useState(false);
	const [currentColor, changeCurrentColor] = React.useState('#3F51B5');
	const [colors, setColors] = React.useState(['#3F51B5']);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const addColor = (newColor) => {
		setColors(colors => [...colors, newColor]);
	}

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
						onClick={handleDrawerOpen}
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
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<div className={classes.drawerMain}>
					<h2>Design Your Palette</h2>
					<div className={classes.btnWrap}>
						<Button variant='contained' color='secondary'>
							clear palette
						</Button>
						<Button variant='contained' color='primary'>
							random color
						</Button>
					</div>
					<ChromePicker
						color={currentColor}
						onChangeComplete={newColor => changeCurrentColor(newColor)}
						disableAlpha
						width="100%"
					/>
					<div className={classes.textfield}>
						<TextField id='filled-basic' label='Color Name' variant='filled' />
					</div>
					<Button variant='contained' color="primary" style={{ backgroundColor: currentColor.hex }} onClick={() => addColor(currentColor.hex)}>
						Add color
					</Button>
				</div>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}>
				<div className={classes.drawerHeader} />
				{colors.map((color, idx) => <h2 key={idx}>{color}</h2>)}
			</main>
		</div>
	);
}

export default NewPaletteForm;
