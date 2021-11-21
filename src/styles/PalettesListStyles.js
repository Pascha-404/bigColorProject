import sizes from '../sizes';

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
			[sizes.down('xs')]: {
				fontSize: '1.1rem',
			},
		},
		'& a': {
			color: 'white',
			[sizes.down('xs')]: {
				fontSize: '0.8rem',
			},
		},
	},
	palettes: {
		width: '100%',
		boxSizing: 'border-box',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '5%',
		[sizes.down('md')]: {
			gridTemplateColumns: 'repeat(2, 50%)',
		},
		[sizes.down('sm')]: {
			gridTemplateColumns: 'repeat(1, 100%)',
			gridGap: '2%',
		},
	},
};

export default styles;
