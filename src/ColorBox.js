import React, { Component } from 'react'
import "./ColorBox.css"

class ColorBox extends Component {
    render() {
        const {name, color} = this.props;
        return (
            <div className="ColorBox" style={{ backgroundColor: color }}>
                <div className="ColorBox-copy-container">
                    <div className="ColorBox-content">
                        <span className="ColorBox-name">{name}</span>
                    </div>
                    <button className="ColorBox-copy-btn">copy</button>
                </div>
                <span className="ColorBox-see-more">more</span>
            </div>
        )
    }
}

export default ColorBox;