import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';

import styles from './styles/ColorBoxStyles';

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
		const { copied } = this.state;
		return (
			<CopyToClipboard text={background} onCopy={this.changeCopieState}>
				<div className={classes.root} style={{ backgroundColor: background }}>
					<div
						className={`${classes.copyOverlay} 
						${copied && classes.copyOverlayShow}`}
						style={{ backgroundColor: background }}
					/>

					<div className={`${classes.copyMsg} ${copied && classes.copyMsgShow}`}>
						<h1>copied!</h1>
						<p>{background}</p>
					</div>

					<div className='ColorBox-copy-container'>
						<div className={classes.content}>
							<span className={classes.name}>{name}</span>
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
