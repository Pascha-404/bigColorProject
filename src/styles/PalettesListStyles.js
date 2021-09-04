const styles = {
	root: {
		backgroundColor: 'blue',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	container: {
		width: '50%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		flexWrap: 'wrap',
	},
	nav: {
		width: '100%',
		color: 'white',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingTop: '1rem',
		paddingBottom: '1rem',
		'& span': {
			fontSize: '1.5rem',
		},
		'& a': { color: 'white' },
	},
	palettes: {
		width: '100%',
		boxSizing: 'border-box',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '5%',
	},
};

export default styles;