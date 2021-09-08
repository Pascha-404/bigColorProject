const styles = {
	navbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '6vh',
		'& .rc-slider': {
			width: '25rem',
			display: 'inline-block',
			marginLeft: '1rem',
		},
		'& .rc-slider-track': {
			backgroundColor: 'transparent',
		},
		'& .rc-slider-rail': {
			height: '0.5rem',
		},
		'& .rc-slider-handle, .rc-slider-handle:hover, .rc-slider-handle:active, .rc-slider-handle:focus':
			{
				backgroundColor: 'rgb(0, 179, 0)',
				border: '2px solid rgb(0, 179, 0)',
				boxShadow: 'none',
				height: '0.825rem',
				width: '0.825rem',
				marginTop: '-3px',
				outline: 'none',
			},
	},
	logo: {
		padding: '0 0.8rem',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: '1rem',
		backgroundColor: 'lightgrey',
		fontSize: '22px',
		fontFamily: "'Roboto', sans-serif",
		'& a': {
			textDecoration: 'none',
			color: 'black',
		},
	},
	selectContainer: {
		marginLeft: 'auto',
		marginRight: '1rem',
	},
};

export default styles;
