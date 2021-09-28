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
import DraggableColorbox from './DraggableColorbox';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import styles from './styles/NewPaletteFormStyles';

function NewPaletteForm(props) {
	const classes = styles();
	const [open, setOpen] = React.useState(false);
	const [currentColor, changeCurrentColor] = React.useState('#3F51B5');
	const [colors, setColors] = React.useState([{ color: '#3F51B5', name: 'orca blue' }]);
	const [colorName, setColorName] = React.useState('');
	const [paletteName, setPaletteName] = React.useState('');

	React.useEffect(() => {
		// custom rule will have name 'isColorUnique'
		ValidatorForm.addValidationRule('isNameUnique', value =>
			colors.every(color => color.name.toLowerCase() !== value.toLowerCase())
		);
		// custom rule will have name 'isColorUnique'
		ValidatorForm.addValidationRule('isColorUnique', value =>
			colors.every(color => color.color !== currentColor)
		);
	});

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const addColor = () => {
		const newColor = { color: currentColor, name: colorName };
		setColors(colors => [...colors, newColor]);
		setColorName('');
	};

	const clearPalette = () => {
		setColors([]);
	};

	const handleSubmit = () => {
		addColor();
	};

	const handleChange = e => {
		setColorName(e.target.value);
	};

	const savePalette = () => {
		const newPalette = {
			paletteName: paletteName,
			id: paletteName.toLowerCase().replace(/ /g, '-'),
			emoji: '😵‍💫',
			colors: colors
		};
		props.savePalette(newPalette)
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
					<TextField id='filled-basic' label='Filled' variant='filled' value={paletteName} onChange={e => setPaletteName(e.target.value)}/>
					<div>
						<Button variant='contained' color='primary' onClick={savePalette}>
							save palette
						</Button>
						<Link to='/'>
							<Button variant='contained' color='secondary'>
								go back
							</Button>
						</Link>
					</div>
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
						<Button variant='contained' color='secondary' onClick={clearPalette}>
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

					<ValidatorForm onSubmit={handleSubmit}>
						<div className={classes.textfield}>
							<TextValidator
								label='Color Name'
								onChange={handleChange}
								name='colorName'
								value={colorName}
								validators={['required', 'isColorUnique', 'isNameUnique']}
								errorMessages={[
									'Name is required',
									'Color is already picked',
									'Name is already taken',
								]}
							/>
						</div>
						<Button
							variant='contained'
							color='primary'
							style={{ backgroundColor: currentColor }}
							type='submit'>
							Add color
						</Button>
					</ValidatorForm>
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
