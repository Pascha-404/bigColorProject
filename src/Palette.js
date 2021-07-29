import React, { Component } from 'react'
import "./Palette.css"
import ColorBox from "./ColorBox"

class Palette extends Component {
    render() {
        const colorBoxes = this.props.colors.map((color, idx) => <ColorBox {...color} key={idx} />)
        return (
            <div className="Palette">
                
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        )
    }
}


export default Palette
