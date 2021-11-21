import chroma from 'chroma-js';
import sizes from '../sizes';

const styles = {
	root: {
		width: '20%',
		height: props => (props.fullPalette ? '25%' : '50%'),
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		margin: '0 auto',
		marginBottom: '-3px',
		'&:hover button': {
			opacity: '1',
		},
		[sizes.down('lg')]: {
			width: '20%',
			height: props => (props.fullPalette ? '25%' : '50%'),
		},
		[sizes.down('md')]: {
			width: '25%',
			height: props => (props.fullPalette ? '20%' : '33.333%'),
		},
		[sizes.down('sm')]: {
			width: '50%',
			height: props => (props.fullPalette ? '10%' : '20%'),
		},
		[sizes.down('xs')]: {
			width: '100%',
			height: props => (props.fullPalette ? '5%' : '10%'),
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
		color: 'black',
		textTransform: 'uppercase',
	},
	name: {
		color: props => (chroma(props.background).luminance() <= 0.6 ? 'white' : 'black'),
	},
	copyBtn: {
		textAlign: 'center',
		width: '5rem',
		height: '2rem',
		position: 'absolute',
		left: '50%',
		top: '50%',
		marginLeft: '-2.5rem',
		marginTop: '-1rem',
		border: 'none',
		opacity: '0',
		transition: 'opacity 0.5s ease',
		cursor: 'pointer',
		color: props => (chroma(props.background).luminance() <= 0.6 ? 'white' : 'black'),
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		boxShadow: '2px 3px 3px rgba(0, 0, 0, 0.4)',
		fontSize: '1rem',
		outline: 'none',
		textTransform: 'uppercase',
		'&:active': {
			transform: 'scale(0.98)',
		},
	},
	seeMore: {
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		position: 'absolute',
		bottom: '0',
		right: '0',
		width: '60px',
		height: '30px',
		lineHeight: '30px',
		border: 'none',
		color: props => (chroma(props.background).luminance() <= 0.6 ? 'white' : 'black'),
		textAlign: 'center',
		fontSize: '12px',
		textTransform: 'uppercase',
	},
	copyOverlay: {
		transform: 'scale(0.1)',
		opacity: '0',
		height: '100%',
		width: '100%',
		zIndex: '0',
		transition: 'transform 0.5s ease-in',
	},
	copyOverlayShow: {
		transform: 'scale(50)',
		opacity: '1',
		zIndex: '10',
		position: 'absolute',
	},
	copyMsg: {
		position: 'fixed',
		top: '0',
		left: '0',
		right: '0',
		bottom: '0',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		opacity: '0',
		transform: 'scale(0.1)',
		color: props => (chroma(props.background).luminance() <= 0.6 ? 'white' : 'black'),
		zIndex: '11',
		'& h1': {
			width: '100%',
			textTransform: 'uppercase',
			fontWeight: '400',
			padding: '1.5rem',
			textAlign: 'center',
			textShadow: '1px 2px rgba(0, 0, 0, 0.3)',
			backgroundColor: 'rgba(255, 255, 255, 0.3)',
			marginBottom: '0',
		},
		'& p': {
			color: props =>
				chroma(props.background).luminance() <= 0.6
					? 'rgba(255, 255, 255, 0.5)'
					: 'rgba(0, 0, 0, 0.5)',
			fontSize: '2rem',
		},
	},
	copyMsgShow: {
		opacity: '1',
		transform: 'scale(1)',
		transitionDelay: '300ms',
		transition: 'all 500ms ease-in',
	},
};

export default styles;
