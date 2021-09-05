const styles = {
	root: {
		height: '100vh',
		width: '100%',
		overflow: 'hidden',
	},
	colorBoxes: {
		height: '90%',
	},
	goBackBox: {
		width: '20%',
		height: '50%',
		display: 'inline-block',
		position: 'relative',
		margin: '0 auto',
		marginBottom: '-3px',
		backgroundColor: '#000',
		'& a': {
			textDecoration: 'none',
		},
	},
	goBackBtn: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		width: '5rem',
		height: '2rem',
		position: 'absolute',
		left: '50%',
		top: '50%',
		marginLeft: '-2.5rem',
		marginTop: '-1rem',
		border: 'none',
		transition: 'opacity 0.5s ease',
		cursor: 'pointer',
		color: '#fff',
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		fontSize: '1rem',
		outline: 'none',
		textTransform: 'uppercase',
		'&:active': {
			transform: 'scale(0.98)',
		},
	},
};

export default styles;