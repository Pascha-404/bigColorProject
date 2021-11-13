import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import Button from '@material-ui/core/Button';
import FormDialog from './FormDialog';
import CssBaseline from '@material-ui/core/CssBaseline';
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
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				color="default"
				position='fixed'
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}>
				<Toolbar disableGutters={!open}>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						onClick={handleDrawerOpen}
						edge='start'
						className={clsx(classes.menuButton, open && classes.hide)}>
						<AddToPhotosIcon/>
					</IconButton>

					<Typography variant='h6' noWrap>
						Create a Palette
					</Typography>
				</Toolbar>

				<div className={classes.navBtn}>
					<Link to='/'>
						<Button className={classes.button} variant='contained' color='secondary'>
							go back
						</Button>
					</Link>

					<Button className={classes.button} variant='contained' color='primary' onClick={showForm}>
						save
					</Button>
				</div>
			</AppBar>

			{showDialogForm && (
				<FormDialog
					hideForm={hideForm}
					savePalette={savePalette}
					palettes={props.palettes}
				/>
			)}
		</div>
	);
}

export default NewPaletteFormNav;
