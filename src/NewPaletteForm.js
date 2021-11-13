import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import DraggableColorList from './DraggableColorList';
import { arrayMoveImmutable as arrayMove } from 'array-move';
import NewPaletteFormNav from './NewPaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import styles from './styles/NewPaletteFormStyles';

function NewPaletteForm(props) {
	const classes = styles();
	const [open, setOpen] = React.useState(false);
	const [colors, setColors] = React.useState([{ color: '#3F51B5', name: 'orca blue' }]);
	const [isPaletteFull, setPaletteFull] = React.useState(false);

	// checks if Palette is full and sets state for disabling random/add btn
	React.useEffect(() => {
		if (colors.length >= 20) {
			setPaletteFull(true);
		} else {
			setPaletteFull(false);
		}
	}, [colors.length]);

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	const addColor = (currentColor, colorName) => {
		const newColor = { color: currentColor, name: colorName };
		setColors(colors => [...colors, newColor]);
	};

	const clearPalette = () => {
		setColors([]);
	};

	const savePalette = (paletteName, emoji) => {
		const newPalette = {
			paletteName: paletteName,
			id: paletteName.toLowerCase().replace(/ /g, '-'),
			emoji: emoji,
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
			<NewPaletteFormNav
				open={open}
				handleDrawerOpen={handleDrawerOpen}
				savePalette={savePalette}
				palettes={props.palettes}
			/>
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
							disabled={isPaletteFull ? true : false}>
							random color
						</Button>
					</div>
					<ColorPickerForm
						isPaletteFull={isPaletteFull}
						colors={colors}
						addColor={addColor}
					/>
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
