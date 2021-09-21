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
import DraggableColorbox from './DraggableColorbox';
import styles from './styles/NewPaletteFormStyles';

function NewPaletteForm() {
	const classes = styles();
	const [open, setOpen] = React.useState(false);
	const [currentColor, changeCurrentColor] = React.useState('#3F51B5');
	const [colors, setColors] = React.useState([{ color: '#3F51B5', name: 'orca blue' }]);
	const [validationError, setValidationError] = React.useState(false);
	const [errorText, setErrorText] = React.useState('');
	const [colorName, setColorName] = React.useState('');

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const validateColor = (color, colorName) => {
		let doubleColor = 0;
		let doubleName = 0;
		colors.forEach(c => {
			if (c.name.toLowerCase() === colorName.toLowerCase()) {
				doubleName += 1;
			}
			if (c.color === color) {
				doubleColor += 1;
			}
		});
		if (doubleColor > 0 && doubleName > 0) {
			return 'hasBoth';
		} else if (doubleColor > 0) {
			return 'hasColor';
		} else if (doubleName > 0) {
			return 'hasName';
		} else {
			return 'valid';
		}
	};

	const addColor = (color, colorName) => {
		const newColor = { color: color, name: colorName };
		setColors(colors => [...colors, newColor]);
		setColorName('');
	};

	const handleSubmit = (color, colorName) => {
		if (colorName) {
			const isValid = validateColor(color, colorName);
			if (isValid === 'hasColor') {
				setErrorText('You already picked this color');
				setValidationError(true);
			} else if (isValid === 'hasName') {
				setErrorText('Name is already taken');
				setValidationError(true);
			} else if (isValid === 'hasBoth') {
				setErrorText('Name and color is already taken');
				setValidationError(true);
			} else {
				addColor(color, colorName);
				setValidationError(false);
				setErrorText('');
			}
		} else {
			setErrorText('Name is required');
			setValidationError(true);
		}
	};

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
						onChangeComplete={newColor => changeCurrentColor(newColor.hex)}
						disableAlpha
						width='100%'
					/>
					<div className={classes.textfield}>
						<TextField
							id='filled-basic'
							label='Color Name'
							variant='filled'
							helperText={errorText}
							value={colorName}
							onChange={e => setColorName(e.target.value)}
							error={validationError && true}
						/>
					</div>
					<Button
						variant='contained'
						color='primary'
						style={{ backgroundColor: currentColor }}
						onClick={() => handleSubmit(currentColor, colorName)}>
						Add color
					</Button>
				</div>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}>
				<div className={classes.drawerHeader} />
				{colors.map((color, idx) => (
					<DraggableColorbox key={idx} color={color.color} name={color.name} />
				))}
			</main>
		</div>
	);
}

export default NewPaletteForm;
