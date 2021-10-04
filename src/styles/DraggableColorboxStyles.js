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
		marginBottom: '-3px',
	},
	content: {
		padding: '10px',
		width: '100%',
		position: 'absolute',
		left: '0',
		bottom: '0',
		letterSpacing: '1px',
		fontSize: '12px',
		color: 'black',
		textTransform: 'uppercase',
	},
	name: {
		color: props => (chroma(props.color).luminance() <= 0.6 ? 'white' : 'black'),
	},
	deleteBtn: {
		position: 'absolute',
		bottom: '0',
		right: '0',
		border: 'none',
	},
};

export default styles;
