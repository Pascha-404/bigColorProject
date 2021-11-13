import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 300;

const styles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.05)',
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: "1.3rem",
		marginLeft: "0.7rem"
	},
	hide: {
		display: 'none',
	},
	navBtn: {
		margin: '0 0.5rem',
		'& a': {
			textDecoration: 'none',
		},
	},
	button: {
		margin: '0 0.5rem',
	},
}));

export default styles;
