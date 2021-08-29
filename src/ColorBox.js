import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

const styles = {
	root: {
		width: '20%',
		height: props => props.fullPalette ? "25%" : "50%",
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		margin: '0 auto',
		marginBottom: '-3px',
		'&:hover button': {
			opacity: '1',
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
		color: 'white',
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
		color: 'white',
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
		color: '#fff',
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
			color: 'rgba(255, 255, 255, 0.5)',
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

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = { copied: false };
		this.changeCopieState = this.changeCopieState.bind(this);
	}

	changeCopieState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => {
				this.setState({ copied: false });
			}, 1500);
		});
	}
	render() {
		const { classes, name, background, seeMoreBtn, seeMoreUrl } = this.props;
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopieState}>
				<div className={classes.root} style={{ backgroundColor: background }}>
					<div
						className={`${classes.copyOverlay} ${
							this.state.copied && classes.copyOverlayShow
						}`}
						style={{ backgroundColor: background }}
					/>
					<div
						className={`${classes.copyMsg} ${this.state.copied && classes.copyMsgShow}`}>
						<h1>copied!</h1>
						<p>{this.props.background}</p>
					</div>
					<div className='ColorBox-copy-container'>
						<div className={classes.content}>
							<span>{name}</span>
						</div>
						<button className={classes.copyBtn}>copy</button>
					</div>
					{seeMoreBtn && (
						<Link to={seeMoreUrl} onClick={e => e.stopPropagation()}>
							<span className={classes.seeMore}>more</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default withStyles(styles)(ColorBox);
