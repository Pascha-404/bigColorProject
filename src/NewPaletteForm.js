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
import DraggableColorList from './DraggableColorList';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import { arrayMoveImmutable as arrayMove } from 'array-move';
import styles from './styles/NewPaletteFormStyles';

function NewPaletteForm(props) {
	const classes = styles();
	const [open, setOpen] = React.useState(false);
	const [currentColor, changeCurrentColor] = React.useState('#3F51B5');
	const [colors, setColors] = React.useState([{ color: '#3F51B5', name: 'orca blue' }]);
	const [colorName, setColorName] = React.useState('');
	const [paletteName, setPaletteName] = React.useState('');
	const [paletteFull, setPaletteFull] = React.useState(false);

	React.useEffect(() => {
		// custom rule will have name 'isNameUnique'
		ValidatorForm.addValidationRule('isNameUnique', value =>
			colors.every(color => color.name.toLowerCase() !== value.toLowerCase())
		);
		// custom rule will have name 'isColorUnique'
		ValidatorForm.addValidationRule('isColorUnique', value =>
			colors.every(color => color.color !== currentColor)
		);
		// custom rule will have name 'isPaletteNameUnique'
		ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
			props.palettes.every(
				palette => palette.paletteName.toLowerCase() !== paletteName.toLowerCase()
			)
		);
	});

	// checks if Palette is full and sets state for disabling random/add btn
	React.useEffect(() => {
		if (colors.length >= 20) {
			setPaletteFull(true);
		} else {
			setPaletteFull(false);
		}
	},[colors.length]);

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

	const handleSubmitColor = () => {
		addColor();
	};

	const handleChangeColor = e => {
		setColorName(e.target.value);
	};

	const handleChangeName = e => {
		setPaletteName(e.target.value);
	};

	const savePalette = () => {
		const newPalette = {
			paletteName: paletteName,
			id: paletteName.toLowerCase().replace(/ /g, '-'),
			emoji: '😵‍💫',
			colors: colors,
		};
		props.savePalette(newPalette);
		props.history.push('/');
	};

	const deleteColor = colorToDelete => {
		setColors(curColors => curColors.filter(color => color.name !== colorToDelete));
	};

	const onSortEnd = ({ oldIndex, newIndex }) => {
		setColors(arrayMove(colors, oldIndex, newIndex));
	};

	const randomArray = array => {
		return array[Math.floor(Math.random() * array.length)];
	};

	const addRandomColor = () => {
		let randomColor;
		while (!randomColor) {
			const palette = randomArray(props.palettes);
			const pickedColor = randomArray(palette.colors);
			if (
				colors.every(color => color.name.toLowerCase() !== pickedColor.name.toLowerCase())
			) {
				randomColor = pickedColor;
			}
		}
		setColors(cur => [...cur, randomColor]);
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

					<ValidatorForm onSubmit={savePalette}>
						<TextValidator
							label='Palette Name'
							value={paletteName}
							onChange={handleChangeName}
							name='paletteName'
							validators={['required', 'isPaletteNameUnique']}
							errorMessages={[
								'Palette Name is required',
								'Palette Name is already taken',
							]}
						/>
						<Button variant='contained' color='primary' type='submit'>
							save palette
						</Button>
					</ValidatorForm>
					<Link to='/'>
						<Button variant='contained' color='secondary'>
							go back
						</Button>
					</Link>
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
						<Button
							variant='contained'
							color='primary'
							onClick={addRandomColor}
							disabled={paletteFull ? true : false}>
							random color
						</Button>
					</div>
					<ChromePicker
						color={currentColor}
						onChange={newColor => changeCurrentColor(newColor.hex)}
						disableAlpha
						width='100%'
					/>

					<ValidatorForm onSubmit={handleSubmitColor}>
						<div className={classes.textfield}>
							<TextValidator
								label='Color Name'
								onChange={handleChangeColor}
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
							type='submit'
							disabled={paletteFull ? true : false}>
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
				<DraggableColorList
					colors={colors}
					deleteColor={deleteColor}
					onSortEnd={onSortEnd}
					axis='xy'
					distance={20}
				/>
			</main>
		</div>
	);
}

export default NewPaletteForm;
