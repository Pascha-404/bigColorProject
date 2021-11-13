import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import FormDialog from './FormDialog';
import { Link } from 'react-router-dom';
import styles from './styles/NewPaletteFormNavStyles';

function NewPaletteFormNav(props) {
	const [showDialogForm, setDialogForm] = React.useState(false);
	const { open, handleDrawerOpen, savePalette } = props;
	const classes = styles();

	const showForm = () => {
		setDialogForm(true);
	};
	const hideForm = () => {
		setDialogForm(false);
	};

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

				
					<Button variant='contained' color='primary' onClick={showForm}>
						save palette
				</Button>
				
				{showDialogForm && <FormDialog hideForm={hideForm} savePalette={savePalette} palettes={props.palettes}/>}

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
