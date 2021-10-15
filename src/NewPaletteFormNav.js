import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import styles from './styles/NewPaletteFormNavStyles';

function NewPaletteFormNav(props) {
	const { open, paletteName, handleDrawerOpen, savePalette, handleChangeName } = props;
	const classes = styles();
	return (
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
						errorMessages={['Palette Name is required', 'Palette Name is already taken']}
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
	);
}

export default NewPaletteFormNav;
