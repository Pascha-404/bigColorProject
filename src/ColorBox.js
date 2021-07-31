import React, { Component } from 'react'
import "./ColorBox.css"
import { CopyToClipboard } from "react-copy-to-clipboard"

class ColorBox extends Component {
    constructor(props) {
        super(props);
         this.state = { copied: false }
    }
    render() {
        const {name, color} = this.props;
        return (
            <CopyToClipboard text={color}>
                <div className="ColorBox" style={{ backgroundColor: color }}>
                    <div className="ColorBox-overlay" style={{backgroundColor: color}} />
                    <div className="ColorBox-copy-container">
                        <div className="ColorBox-content">
                            <span className="ColorBox-name">{name}</span>
                        </div>
                        <button className="ColorBox-copy-btn">copy</button>
                    </div>
                    <span className="ColorBox-see-more">more</span>
                </div>
            </CopyToClipboard>
        )
    }
}

export default ColorBox;