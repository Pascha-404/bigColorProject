const styles = {
	root: {
		width: '100%',
		backgroundColor: 'white',
		display: 'inline-block',
		borderRadius: '5px',
		padding: '0.5rem',
		position: 'relative',
		'&:hover': {
			cursor: 'pointer',
		},
		'&:hover svg': {
			opacity: '1',
		},
	},
	colors: {
		backgroundColor: 'grey',
		width: '100%',
		height: '150px',
		borderRadius: '5px',
		overflow: 'hidden',
	},
	miniColorBoxes: {
		width: '20%',
		height: '25%',
		display: 'inline-block',
		margin: '0 auto',
		position: 'relative',
		marginBottom: '-3.5px',
	},
	title: {
		fontSize: '1rem',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '0',
		paddingTop: '0.5rem',
		color: 'black',
	},
	emoji: {
		fontSize: '1.5rem',
		marginLeft: '0.5rem',
	},
	deleteBtn: {
		position: 'absolute',
		top: '0',
		right: '0',
		zIndex: '5',
		backgroundColor: '#eb3d30',
		padding: '0.5rem',
		borderRadius: '3px',
		color: 'white',
		opacity: '0',
		transition: 'opacity 0.3s ease-in',
	},
};

export default styles;
