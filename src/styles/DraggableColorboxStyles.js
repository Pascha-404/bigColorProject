import chroma from 'chroma-js';

const styles = {
	root: {
		width: '20%',
		height: '25%',
		display: 'inline-block',
		backgroundColor: props => props.color,
		cursor: 'pointer',
		position: 'relative',
		margin: '0 auto',
		marginBottom: '-5px',
		'&:hover svg': {
			color: "white",
			transform: 'scale(1.5)',
		},
	},
	content: {
		padding: '10px',
		width: '100%',
		position: 'absolute',
		left: '0',
		bottom: '0',
		letterSpacing: '1px',
		fontSize: '12px',
		textTransform: 'uppercase',
		display: "flex",
		justifyContent: "space-between",
		color: "rgba(0,0,0,0.5)"
	},
	name: {
		color: props => (chroma(props.color).luminance() <= 0.6 ? 'white' : 'black'),
	},
	deleteBtn: {
		transition: 'all 500ms ease',
	},
};

export default styles;
